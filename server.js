import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
 import https from 'https';
//import http from 'http';
import fs from 'fs';

// import http from 'http';

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
   service: "gmail",
//  port: 465,
  auth: {
    user: 'director@anahmarketing.com',
    pass: 'zimapjfecavbthoa',
  },
});

// for loacl test 

//  host: 'smtp.gmail.com',
//   port: 587,
//   auth: {
//     user: 'iglobe592@gmail.com',
//     pass: 'oyblflcfwghnlsgg',
//   },

app.post('/send-email', async (req, res) => {
    //console.log("896523",req.body)
  try {
    const { first_name, last_name, email, phone, message, company, city, category, Monthly_Marketing_Spend, Website_URL, Brand_name,formType,spend} = req.body;
    //console.log("Received form data:", req.body);
    const finalSpend = Monthly_Marketing_Spend || spend;

    const fields = [
      { label: 'Full Name', value: `${first_name || ''} ${last_name || ''}`.trim() },
      { label: 'Email', value: email },
      { label: 'Phone', value: phone },
      { label: 'Company', value: company },
      { label: 'Message', value: message },
      { label: 'City', value: city },
      { label: 'Category', value: category },
   { label: 'Monthly Marketing Spend', value: finalSpend },
      { label: 'Website Url', value: Website_URL },
      { label: 'Brand Name', value: Brand_name },
    ];

    const formattedFields = fields
      .filter(field => field.value)
      .map(field => `<tr><td><strong>${field.label}:</strong></td><td>${field.value}</td></tr>`)
      .join('');

      const subject = spend && spend.trim()
  ? "Performance Marketing Lead"
  : "New Contact Form Submission";

const htmlBody = `
  <h2>${subject}</h2>
  <table style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
    ${formattedFields}
  </table>
`;
    // const htmlBody = `
    //   <h2>New Contact Form Submission</h2>
    //   <table style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
    //     ${formattedFields}
    //   </table>
    // `;

    const mailOptions = {
      from: "marketing@anahmarketing.com",
       to: "marketing@anahmarketing.com",
      cc: "director@anahmarketing.com",
      // to: "demoigs24@gmail.com",
      // cc: "ayushnama007@gmail.com",

      subject: "New Contact Form Submission",
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);


         const leadName = `${first_name} ${last_name}`;

    if (formType !== "meta" && formType !== "contact" ) {
      const leadName = `${first_name} ${last_name}`;

      const htmlBody1 = `
  <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
   <h2 style="color:#2c3e50;">Hi ${leadName},</h2>
    <p>
      Thank you for reaching out to <strong>Anax Marketing & Innovations</strong>! 🙌<br/>
      We’re excited to connect with you. As one of the leading <strong>Shopify development & maintenance companies</strong> with over a decade of experience, we’ve successfully delivered <strong>100+ Shopify stores</strong> across diverse industries.
    </p>
    
    <p>Here are some of the amazing brands we’ve recently worked with:</p>
    <ul style="padding-left:20px;">
      <li>✨ Chase Haul</li>
      <li>✨ Style Union</li>
      <li>✨ Rioz</li>
      <li>✨ Baidyanath</li>
      <li>✨ Siddhayu</li>
      <li>✨ Iccon World</li>
      <li>✨ Zari Jaipur</li>
      <li>✨ Leheriya</li>
      <li>✨ Ethnicity</li>
      <li>✨ 7 Cavalry</li>
    </ul>

    <p><strong>Our expertise includes:</strong></p>
    <ul style="padding-left:20px;">
      <li>✅ Custom Shopify Store Development</li>
      <li>✅ Store Redesign & Theme Customization</li>
      <li>✅ Ongoing Maintenance & Growth Support</li>
    </ul>

    <p>
      To serve you better, we’d love to schedule a quick call to understand your goals and share how we can help.<br/>
      👉 Could you let us know a convenient time for you to connect?
    </p>

    <p>
      You can also directly reach <strong>Harshad Anil More</strong> at <a href="tel:9207419301">9207419301</a> 
      (available for calls Monday to Friday, 9 AM – 6 PM).
    </p>

    <p>Looking forward to speaking with you soon!</p>

    <p style="margin-top:20px;">
      Best Regards,<br/>
      <strong>Harshad Anil More</strong><br/>
      Anax Marketing & Innovations<br/>
      📞 <a href="tel:9207419301">9207419301</a>
    </p>
  </div>
`;


    const mailOptions1 = {
      from: "marketing@anahmarketing.com",
      to: email,
      subject: "New Contact Form Submission",
      html: htmlBody1,
    };

    const info1 = await transporter.sendMail(mailOptions1);
    

    }


    // console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Server Error');
  }
});


// Start HTTPS server on port 5000 For live 

https.createServer(sslOptions, app).listen(5000, () => {
  console.log('HTTPS Server running on port 5000');
});


// For Local 

// http.createServer(app).listen(5000, () => {
//   console.log('HTTP Server running on port 5000');
// });
