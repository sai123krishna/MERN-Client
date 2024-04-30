const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(express.json());

// Configure Nodemailer with your email credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

app.post('/sendEmail', (req, res) => {
  const imgData = req.body.image;

  // Use Nodemailer to send an email with the captured image attached
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'ram96@gmail.com',
    subject: 'Captured Image',
    text: 'Please find the captured image attached.',
    attachments: [
      {
        filename: 'captured_image.jpg',
        content: imgData.split('base64,')[1],
        encoding: 'base64'
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email could not be sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
