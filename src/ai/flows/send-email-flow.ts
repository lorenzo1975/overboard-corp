"use server";
/**
 * @fileOverview A flow for sending emails from the contact form using Mailgun.
 *
 * - sendEmail - A function that handles sending the contact email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { z } from "zod";
import formData from "form-data";
import Mailgun from "mailgun.js";

const SendEmailInputSchema = z.object({
  name: z.string().describe("The name of the person sending the message."),
  email: z.string().email().describe("The email address of the sender."),
  subject: z.string().describe("The subject of the message."),
  message: z.string().describe("The content of the message."),
});

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(
  input: SendEmailInput
): Promise<{ success: boolean }> {
  console.log("Received contact form submission:", input);

  const {
    MAILGUN_API_KEY,
    MAILGUN_DOMAIN,
    MAILGUN_TO_EMAIL,
    MAILGUN_FROM_EMAIL,
  } = process.env;

  if (
    !MAILGUN_API_KEY ||
    !MAILGUN_DOMAIN ||
    !MAILGUN_TO_EMAIL ||
    !MAILGUN_FROM_EMAIL
  ) {
    console.error("Mailgun environment variables are not set.");
    throw new Error("Server configuration error. Unable to send email.");
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY,
  });

  const msg = {
    to: MAILGUN_TO_EMAIL,
    from: `Overboard Contact Form <${MAILGUN_FROM_EMAIL}>`,
    "h:Reply-To": input.email,
    subject: `New Contact Form Submission: ${input.subject}`,
    html: `
      <h1>New Message from your Website Contact Form</h1>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Message:</strong></p>
      <p>${input.message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await mg.messages.create(MAILGUN_DOMAIN, msg);
    console.log("Email sent successfully via Mailgun");
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    // It's important to throw the error so the frontend knows something went wrong.
    throw new Error(`Failed to send email: ${error}`);
  }
}
