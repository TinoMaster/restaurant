import { EmailVerification } from "@/components/helpers/Email Templates/Email_Verification";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ommallono@gmail.com"],
      subject: "Hello world",
      react: EmailVerification({ firstName: "John" }),
      text: "This is the text content of the email",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
