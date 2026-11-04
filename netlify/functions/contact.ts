import formData from "form-data";
import Mailgun from "mailgun.js";
import { z } from "zod";
import { contactSchema } from "../../src/lib/contact-schema";

const submissionSchema = contactSchema.extend({
  companyWebsite: z.literal(""),
});

const maxBodyLength = 32 * 1024;

export const config = {
  path: "/api/contact",
  method: "POST",
  rateLimit: {
    windowLimit: 10,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};

export default async function contact(request: Request) {
  if (request.method !== "POST") {
    return new Response(null, { status: 405, headers: { Allow: "POST" } });
  }
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return new Response(null, { status: 403 });
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return new Response(null, { status: 415 });
  }
  if (Number(request.headers.get("content-length")) > maxBodyLength) {
    return new Response(null, { status: 413 });
  }

  let input: unknown;
  try {
    const body = await request.text();
    if (Buffer.byteLength(body) > maxBodyLength) return new Response(null, { status: 413 });
    input = JSON.parse(body);
  } catch {
    return new Response(null, { status: 400 });
  }

  const submission = submissionSchema.safeParse(input);
  if (!submission.success) return new Response(null, { status: 400 });
  const { name, email, subject, message } = submission.data;

  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_TO_EMAIL, MAILGUN_FROM_EMAIL } = process.env;
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_TO_EMAIL || !MAILGUN_FROM_EMAIL) {
    console.error("Contact form email delivery is not configured.");
    return new Response(null, { status: 503 });
  }

  try {
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });
    await client.messages.create(MAILGUN_DOMAIN, {
      to: MAILGUN_TO_EMAIL,
      from: `Overboard Contact Form <${MAILGUN_FROM_EMAIL}>`,
      "h:Reply-To": email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `New message from your website contact form\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return new Response(null, { status: 204 });
  } catch {
    console.error("Contact form email delivery failed.");
    return new Response(null, { status: 502 });
  }
}
