'use server';
/**
 * @fileOverview A flow for sending emails from the contact form.
 *
 * - sendEmail - A function that handles sending the contact email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

// This is the main function that the frontend will call.
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

    // TODO: Add your email sending logic here.
    // This is where you would integrate with a service like Resend, SendGrid, or Nodemailer.
    // Example using Resend (you would need to `npm install resend`):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'Your Name <onboarding@resend.dev>', // Should be a verified domain
        to: ['your-email@example.com'], // Your destination email
        subject: `New Contact Form Submission: ${input.subject}`,
        html: `
          <h1>New Message from your Website</h1>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      console.log('Email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      // It's important to throw the error so the frontend knows something went wrong.
      throw new Error('Failed to send email.');
    }
    */
    
    // For now, we'll just simulate a successful email send.
    // Remove this line when you implement a real email service.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  }
);
