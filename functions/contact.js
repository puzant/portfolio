const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
  console.log('Received event:', event);

  return {
    statusCode: 200, // HTTP Status OK
    body: JSON.stringify({ message: 'Hello, world!' }),
  };
  
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     statusCode: 405,
  //     body: JSON.stringify({ message: 'Method is not allowed' })
  //   }
  // }

  // const { name, email, message } = event.body

  // if (!name || !email || !message) {
  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({ message: 'All fields are required' })
  //   }
  // }

  // try {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.office365.com',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: 'pbakjejian@hotmail.com',
  //       pass: 'Puzant1234',
  //     }
  //   })

  //   const mailOptions = {
  //     from: `${email}`,
  //     to: 'pbakjejian@hotmail.com',
  //     subject: 'A message from client',
  //     text: `You have a new message from ${name} (${email}):\n\n${message}`,
  //   };

  //   await transporter.sendMail(mailOptions)

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: 'Message sent successfully' })
  //   }
  // } catch (err) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ message: 'Failed to send email', error: err.message }),
  //   };
  // }
}