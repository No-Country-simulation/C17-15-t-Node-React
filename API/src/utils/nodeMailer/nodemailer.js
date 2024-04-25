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
    console.log(data)
    await transport.sendMail({
      from: `MasterAula <${process.env.NODEMAILERUSER}>`,
      to: data.email,
      subject: `USUARIO ${data.name} REGISTRADO`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Usuario registrado</title>
      </head>
      <body>
        <div class="container">
          <h1>USUARIO REGISTRADO!</h1>
          <p>Hello ${data.name},</p>
          <p>Es un placer informarle que su registro fue existoso!</p>
          <p>Best regards,</p>
          <p>Equipo de masteraula</p>
          <p>su codígo de verificacion es: ${data.verifyCode}</p>
        </div>
      </body>
      </html>
      `,
    });
  } catch (error) {
    throw error;
  }
}
