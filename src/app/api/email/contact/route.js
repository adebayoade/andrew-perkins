import { transport } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const message = {
    from: `${process.env.NEXT_APP_NAME} <${process.env.MAIL_FROM}>`,
    to: process.env.SUPPORT_EMAIL_ADDRESS,
    subject: 'Hire Me',
    html: `
            <div>
              <h3>From: ${data.firstName} ${data.lastName}</h3>
              <p>Email: ${data.email}</p>
              <p>${data.message}</p>
            </div>
          `,
  };

  const response = await transport
    .sendMail(message)
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  if (response.messageId) {
    console.log(`Message sent: %s ${response.messageId}`);
    return NextResponse.json({
      message: `Message sent: %s ${response.messageId}`,
      success: true,
      status: 200,
    });
  } else {
    console.log('Mail not sent.');
    return NextResponse.json(
      { success: false, error: { message: 'Email not sent. Please try again later.' } },
      { status: 500 }
    );
  }
}
