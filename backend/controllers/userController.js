import { createTransport } from 'nodemailer';

const mailer = (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(404).json({error: "Invalid fields."})
    }
}

export { mailer }