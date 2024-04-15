import { createTransport } from "nodemailer";

export default async function sendEmail(data) {
  try {
    const transport = createTransport({
      service: "gmail",
      port: process.env.PORT,
      auth: {
        user: process.env.NODEMAILERUSER,
        pass: process.env.NODEMAILERPASSWORD,
      },
    });
    await transport.sendMail({
      from: `CODER <${process.env.NODEMAILERUSER}>`,
      to: data.email,
      subject: `USER ${data.name} REGISTERED`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Registered</title>
      </head>
      <body>
        <div class="container">
          <h1>USER REGISTERED!</h1>
          <p>Hello ${data.name},</p>
          <p>We are pleased to inform you that your registration was successful.</p>
          <p>Thank you for joining us!</p>
          <p>Best regards,</p>
          <p>The CODER Team</p>
          <p>Your verify code is ${data.verifyCode}</p>
        </div>
      </body>
      </html>
    `,
    });
  } catch (error) {
    throw error;
  }
}
