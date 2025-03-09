import { createTransport } from 'nodemailer';

const mailer = (req, res) => {
    const { name, email } = req.body;

    const user = process.env.EMAIL_USER
    if (!name || !email) {
        return res.status(400).json({error: "Invalid fields."})
    }

    res.status(201).json({user: user})
}

export { mailer }