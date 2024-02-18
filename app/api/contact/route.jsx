import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;

  console.log('dealing with request');
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const start = formData.get('start');
  const end = formData.get('end');
  const message = formData.get('message');


  // create transporter object
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: username,
      pass: password,
    },
    secure: true,
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: username,
      replyTo: email,
      subject: `Anfrage von ${name}: ${start} - ${end}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Von: ${start} bis: ${end}</p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}


