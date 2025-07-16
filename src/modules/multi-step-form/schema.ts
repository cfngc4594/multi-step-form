import { z } from "zod";

export const multiStepFormSchema = z
  .object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    password: z.string().min(8).max(20),
    repeatPassword: z.string().min(8).max(20),
    username: z.string().min(3).max(20),
    terms: z.boolean().refine((val) => val, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

export type MultiStepFormSchema = z.infer<typeof multiStepFormSchema>;
