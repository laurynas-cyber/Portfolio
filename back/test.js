const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your App Password (no spaces)
  },
});

let mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'recipient@example.com',  // Put any valid recipient email here
  subject: 'Test email from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});