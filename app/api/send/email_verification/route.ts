import { EmailVerification } from "@/components/helpers/Email Templates/Email_Verification";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ommallono@gmail.com"],
      subject: "Verify your email",
      react: EmailVerification({ firstName: "Oscar" }),
      text: "This is the text content of the email",
    });

    return Response.json({ success: true, data, message: "Email enviado" });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: "Error al enviar email" });
  }
}
