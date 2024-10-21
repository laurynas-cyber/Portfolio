const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/send-email", (req, res) => {
  const { subject, email, message } = req.body;


  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `${subject}`,
    text: `You have received a new message from (${email}):\n\n${message}`,
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending message.");
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Message sent successfully!");
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
