import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Brevo SMTP setup
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: '8a0b7e001@smtp-brevo.com', // Brevo username
    pass: 'RxKkYrq4zJcjNh5Q',        // Brevo password/API key
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message, company, city, category } = req.body;

    // ✅ Ensure at least one required field exists
    if (!email && !phone) {
      return res.status(400).json({ error: 'Email or phone is required' });
    }

    // ✅ Only include non-empty fields in the email body
    const fields = [
      { label: 'Full Name', value: `${first_name || ''} ${last_name || ''}`.trim() },
      { label: 'Email', value: email },
      { label: 'Phone', value: phone },
      { label: 'Company', value: company },
      { label: 'City', value: city },
      { label: 'Category', value: category },
      { label: 'Message', value: message }
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

    // ✅ Use verified sender email from Brevo
    const mailOptions = {
      from: '"Anah Marketing" <8a0b7e001@smtp-brevo.com>', // Must be verified in Brevo
      to: 'demoigs24@gmail.com', // Main recipient
      cc: 'ayushnama007@gmail.com', // CC for testing
      subject: 'New Contact Form Submission',
      html: htmlBody,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('✅ Server started on port new 5000');
});
