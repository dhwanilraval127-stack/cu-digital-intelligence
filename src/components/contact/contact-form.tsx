"use client";

import { useState, useId, useCallback } from "react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const helpOptions = [
  { value: "ai-solutions-intelligent-systems", label: "AI Solutions & Intelligent Systems" },
  { value: "ai-chatbots-virtual-assistants", label: "AI Chatbots & Virtual Assistants" },
  { value: "business-automation", label: "Business Automation" },
  { value: "data-business-intelligence", label: "Data & Business Intelligence" },
  { value: "product-software-engineering", label: "Product & Software Engineering" },
  { value: "on-demand-technology", label: "On-Demand Technology" },
  { value: "not-sure-yet", label: "Not sure yet" },
] as const;

const fieldBase =
  "w-full rounded-[3px] border bg-cu-bg px-4 py-3 text-[15px] text-cu-text placeholder:text-cu-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-cu-primary/40";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-cu-primary-dark">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formId = useId();

  const validate = useCallback(
    (values: Record<string, string>) => {
      const parsed = contactFormSchema.safeParse(values);
      if (!parsed.success) {
        const errors: Record<string, string> = {};
        for (const issue of parsed.error.issues) {
          const key = String(issue.path[0] ?? "form");
          if (!errors[key]) errors[key] = issue.message;
        }
        return errors;
      }
      return {};
    },
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      helpWith: String(fd.get("helpWith") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    } as const;

    const fieldErrors = validate(raw);
    if (Object.keys(fieldErrors).length > 0) {
      setFieldErrors(fieldErrors);
      setServerError(null);
      return;
    }

    setFieldErrors({});
    setServerError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...raw, helpWith: raw.helpWith as ContactFormValues["helpWith"] }),
      });

      if (res.status === 429) {
        setServerError(
          "That was a lot of messages in a short time. Please wait a few minutes and try again."
        );
        setStatus("error");
        return;
      }

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || data.ok !== true) {
        throw new Error(data.error || `Request failed: ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch {
      setServerError(
        "Something went wrong sending your message. Please try again, or email us directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="cu-card border border-cu-border bg-cu-bg p-10 text-center sm:p-14"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cu-pale"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-cu-primary-dark" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-6 text-h3 font-semibold text-cu-text">
          Message received.
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-cu-muted">
          Thank you — a real person will read this and reply shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {serverError ? (
        <div
          role="alert"
          className="rounded-[3px] border border-cu-border-strong bg-cu-surface-soft p-4 text-sm text-cu-primary-dark"
        >
          {serverError}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="mb-2 block text-sm font-medium text-cu-text"
          >
            Name <span aria-hidden="true" className="text-cu-primary">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
            className={cn(
              fieldBase,
              fieldErrors.name ? "border-cu-primary" : "border-cu-border-strong focus:border-cu-primary"
            )}
          />
          <FieldError id={`${formId}-name-error`} message={fieldErrors.name} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-company`}
            className="mb-2 block text-sm font-medium text-cu-text"
          >
            Business / Organisation
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            className={cn(
              fieldBase,
              "border-cu-border-strong focus:border-cu-primary"
            )}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-email`}
          className="mb-2 block text-sm font-medium text-cu-text"
        >
          Work email <span aria-hidden="true" className="text-cu-primary">*</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
          className={cn(
            fieldBase,
            fieldErrors.email ? "border-cu-primary" : "border-cu-border-strong focus:border-cu-primary"
          )}
        />
        <FieldError id={`${formId}-email-error`} message={fieldErrors.email} />
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-cu-text">
          What can we help with? <span aria-hidden="true" className="text-cu-primary">*</span>
        </legend>
        <div
          className="flex flex-wrap gap-2"
          id={`${formId}-help-group`}
        >
          {helpOptions.map((opt, i) => (
            <label
              key={opt.value}
              className="cursor-pointer"
              htmlFor={`${formId}-help-${i}`}
            >
              <input
                type="radio"
                id={`${formId}-help-${i}`}
                name="helpWith"
                value={opt.value}
                className="peer sr-only"
              />
              <span className="inline-block cursor-pointer rounded-[3px] border border-cu-border-strong bg-cu-bg px-3 py-2 text-sm text-cu-text/80 transition-colors peer-checked:border-cu-primary peer-checked:bg-cu-primary peer-checked:text-cu-bg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cu-primary">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        <FieldError id={`${formId}-help-error`} message={fieldErrors.helpWith} />
      </fieldset>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="mb-2 block text-sm font-medium text-cu-text"
        >
          Tell us about your challenge or idea <span aria-hidden="true" className="text-cu-primary">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={!!fieldErrors.message}
          aria-describedby={
            fieldErrors.message
              ? `${formId}-message-error`
              : `${formId}-message-hint`
          }
          placeholder="What are you trying to build, improve or automate?"
          className={cn(
            fieldBase,
            "resize-y",
            fieldErrors.message ? "border-cu-primary" : "border-cu-border-strong focus:border-cu-primary"
          )}
        />
        <FieldError
          id={`${formId}-message-error`}
          message={fieldErrors.message}
        />
        <p
          id={`${formId}-message-hint`}
          className="mt-1 text-xs text-cu-muted"
        >
          You don&rsquo;t need a fully defined specification.
        </p>
      </div>

      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-cu-primary px-8 py-4 text-[15px] font-medium text-cu-bg transition-all duration-300 hover:bg-cu-primary-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-cu-primary-dark focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg"
      >
        {status === "submitting" ? "Sending…" : "Start the conversation"}
        {status !== "submitting" && (
          <span aria-hidden="true" className="cu-arrow">→</span>
        )}
      </button>

      <p className="text-xs leading-relaxed text-cu-muted">
        We&rsquo;ll only use your details to respond to this enquiry — no
        newsletters, no lists. See our{" "}
        <a href="/privacy" className="cu-link underline decoration-cu-border-strong underline-offset-4 hover:text-cu-primary-dark">
          privacy statement
        </a>
        .
      </p>
    </form>
  );
}
