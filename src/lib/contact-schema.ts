import { z } from "zod";

const singleLine = (label: string) => z.string().trim().refine(
  (value) => !value.includes("\r") && !value.includes("\n") && !value.includes("\0"),
  `${label} must fit on one line.`,
);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100)
    .pipe(singleLine("Name")),
  email: z.email("Please enter a valid email address.").max(254),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters.").max(150)
    .pipe(singleLine("Subject")),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(5000),
});
