import { z } from "zod";

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    firstName: z.string().min(2, t("firstName")),
    lastName: z.string().min(2, t("lastName")),
    email: z.string().email(t("email")),
    phone: z.string().min(6, t("phone")),
    subject: z.string().min(5, t("subject")),
    message: z.string().min(5, t("message")),
  });

export type ContactFormData = z.infer<
  ReturnType<typeof createContactSchema>
>;