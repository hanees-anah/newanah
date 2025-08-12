import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import https from 'https';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// SSL Certificates from Let's Encrypt
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/anahmarketing.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/anahmarketing.com/fullchain.pem')
};

// Nodemailer Transporter (Brevo SMTP)
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: '8a0b7e001@smtp-brevo.com',
    pass: 'RxKkYrq4zJcjNh5Q',
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message, company, city, category } = req.body;

    const fields = [
      { label: 'Full Name', value: `${first_name || ''} ${last_name || ''}`.trim() },
      { label: 'Email', value: email },
      { label: 'Phone', value: phone },
      { label: 'Company', value: company },
      { label: 'Message', value: message },
      { label: 'City', value: city },
      { label: 'Category', value: category }
    ];

    const formattedFields = fields
      .filter(field => field.value)
      .map(field => `<tr><td><strong>${field.label}:</strong></td><td>${field.value}</td></tr>`)
      .join('');

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
        ${formattedFields}
      </table>
    `;

    const mailOptions = {
      from: "harsh.iglobe@gmail.com",
       to: "marketing@anahmarketing.com",
      subject: "New Contact Form Submission",
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Server Error');
  }
});


// Start HTTPS server on port 5000
https.createServer(sslOptions, app).listen(5000, () => {
  console.log('HTTPS Server running on port 5000');
});
