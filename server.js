import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: '8a0b7e001@smtp-brevo.com',
    pass: 'RxKkYrq4zJcjNh5Q',
  },
});

app.post('/send-email', (req, res) => {
  const { first_name, last_name, email, phone, message, company } = req.body;

// console.log("56312ss",req.body)


// console.log("pes",req.body.email)
  // Create an array of field data that is present
  const fields = [
    { label: 'First Name', value: first_name },
    { label: 'Last Name', value: last_name },
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Company', value: company },
    { label: 'Message', value: message },
  ];


  // console.log("6532",fields)
  // Generate email body only with non-empty fields
  const formattedFields = fields
    .filter(field => field.value) // Only include fields with data
    .map(field => `<tr><td><strong>${field.label}:</strong></td><td>${field.value}</td></tr>`)
    .join('');

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
      ${formattedFields}
    </table>
  `;

  let senderEmail = req.body.email?.trim() || 'mailto:no-reply@example.com';
 
  
  // console.log("ioplff",`"${senderEmail}"`)
  const mailOptions = {
    from: "harsh.iglobe@gmail.com",
    to: "admin@anahmarketing.com",
     cc: ["director@anahmarketing.com"],
    subject: "New Contact Form Submission",
    html: htmlBody,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Server Error');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
