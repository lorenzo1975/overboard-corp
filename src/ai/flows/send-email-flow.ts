'use server';
/**
 * @fileOverview A flow for sending emails from the contact form using SendGrid.
 *
 * - sendEmail - A function that handles sending the contact email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import sgMail from '@sendgrid/mail';

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<{ success: boolean }> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    console.log('Received contact form submission:', input);

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_TO_EMAIL || !process.env.SENDGRID_FROM_EMAIL) {
      console.error('SendGrid environment variables are not set.');
      throw new Error('Server configuration error. Unable to send email.');
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `New Contact Form Submission: ${input.subject}`,
      html: `
        <h1>New Message from your Website Contact Form</h1>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Message:</strong></p>
        <p>${input.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent successfully via SendGrid');
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      // It's important to throw the error so the frontend knows something went wrong.
      throw new Error('Failed to send email.');
    }
  }
);
