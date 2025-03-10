import { createTransport } from 'nodemailer';

const mailer = async(req, res) => {
    const { name, email } = req.body;

    const user = process.env.EMAIL_PASS
    if (!name || !email) {
        return res.status(400).json({error: "Invalid fields."})
    }

    // Nodemailer transport setup
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Should be your email address
            pass: process.env.EMAIL_PASS, // App-specific password
        },
    });

    const unsubscribeLink = '/'

    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email
        to: email,                     // Receiver's email
        subject: "Welcome Subscriber",
        html: 
            `<p>Hello,</p>
             <p>Thank you ${name} for subscribing to FavyScents Special Offers and Promotions</p>
             <p>Click <a href=${unsubscribeLink}>here</a> to unsubscribe. This link will expire in 10 minutes.</p>
             <p>If you did not request a password reset, please ignore this email or contact support if you have any concerns.</p>
             <p>Thank you,<br>Support Team</p>
                `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(201).json({ message: 'User successfully subscribed. Kindly check your email.' })
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(400).json({ error: `Error sending email, ${error}` })
      }

}

export { mailer }