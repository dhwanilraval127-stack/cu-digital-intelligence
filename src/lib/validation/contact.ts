import { z } from "zod";
import { SERVICE_SLUGS } from "@/lib/services";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),
  company: z
    .string()
    .trim()
    .max(120, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email is too long."),
  helpWith: z.enum([...SERVICE_SLUGS, "not-sure-yet"] as [string, ...string[]], {
    message: "Please choose what we can help with.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more — at least 20 characters.")
    .max(5000, "Message is too long."),
  // Honeypot: must stay empty. Bots fill it; humans never see it.
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
