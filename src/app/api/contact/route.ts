import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20 * 1024;

function getClientKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  return (forwarded?.split(",")[0]?.trim() || realIp || "unknown").slice(0, 128);
}

function jsonError(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error: message }, { status, headers });
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return jsonError("Unsupported request format.", 415);
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return jsonError("Request is too large.", 413);
  }

  const { allowed, retryAfterSeconds } = rateLimit(getClientKey(req));
  if (!allowed) {
    return jsonError("Too many requests. Please try again later.", 429, {
      "Retry-After": String(Math.max(retryAfterSeconds, 60)),
    });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonError("Request is too large.", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path,
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.website) {
    // Do not reveal bot detection.
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !contactEmail || !fromEmail) {
    console.error("[contact] Production email delivery is not configured.");
    return jsonError("Message could not be sent. Please email us directly.", 503);
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const subject = `New enquiry — ${data.helpWith.replaceAll("-", " ")} — ${data.name}`;
    const text = [
      `Name: ${data.name}`,
      `Business/Organisation: ${data.company || "—"}`,
      `Email: ${data.email}`,
      `Help with: ${data.helpWith}`,
      "",
      data.message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: `CU Digital Intelligence <${fromEmail}>`,
      to: [contactEmail],
      replyTo: data.email,
      subject,
      text,
    });

    if (error) {
      console.error("[contact] Resend delivery failed:", error);
      return jsonError("Message could not be sent. Please try again later.", 502);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected delivery error:", error);
    return jsonError("Message could not be sent. Please try again later.", 500);
  }
}
