import { z } from "zod";

export const resumeFormSchema = z.object({
  job_title: z
    .string({
      required_error: "Job title is required",
    })
    .trim()
    .min(1, "Job title is required"),

  full_name: z
    .string({
      required_error: "Full name is required",
    })
    .trim()
    .min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  phone: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
});
