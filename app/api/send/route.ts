import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
console.log("key " + process.env.NEXT_PUBLIC_RESEND_API_KEY )

export async function POST(req: NextResponse) {


  try {
   
    const data = await req.json();

    console.log(data);
    const { name, email, message } = data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: 'singh.bir978@gmail.com',
      subject: 'Hello world',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

   
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}