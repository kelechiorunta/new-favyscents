import { createTransport } from 'nodemailer';
import Subscriber from '../models/Subscriber.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import jwt from 'jsonwebtoken';

// Passport Local Strategy (Define once globally)
passport.use(
    new LocalStrategy({ usernameField: 'name', passwordField: 'password' }, 
        async (name, password, done) => {
            try {
                const user = await Subscriber.findOne({ name });
                if (!user) {
                    return done(null, false, { message: 'No such user' });
                }

                const isCorrectPassword = await bcrypt.compare(password, user.password);
                if (!isCorrectPassword) {
                    return done(null, false, { message: 'Wrong password' });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

const mailer = async(req, res) => {
    const { name, email, password } = req.body;
    req.username = name

    const user = process.env.EMAIL_PASS
    if (!name || !email || !password) {
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

    const unsubscribeLink = `http://localhost:3200/users/unsubscribe/${name}`

    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email
        to: email,                     // Receiver's email
        subject: "Welcome Subscriber",
        html: 
            `<p>Hello,</p>
             <p>Thank you ${name} for subscribing to FavyScents Special Offers and Promotions</p>
             <p>Click <a href=${unsubscribeLink}>here</a> to unsubscribe. This link will expire in 10 minutes.</p>
             <p>If you did not request a subscription, please ignore this email or contact support if you have any concerns.</p>
             <p>Thank you,<br>Support Team</p>
                `,
    };
    // const hashedPassword = await bcrypt.hash(password, 10)
    const newSubsrciber = new Subscriber({name, email, password})

    try {
        await transporter.sendMail(mailOptions);
        await newSubsrciber.save();
        return res.status(201).json({ message: 'User successfully subscribed. Kindly check your email.', subscriber: newSubsrciber })
      } catch (error) {
        console.log(process.env.EMAIL_PASS)
        console.error('Error sending email:', error);
        return res.status(400).json({ error: `Error sending email, ${error}` })
      }

}

const unsubscribeUser = async(req, res) => {
    
    const name = req.user.name

    if (!name) {
        return res.status(400).json({error: "No such subscriber"});
    }

    try{
        // const user = await Subscriber.findOne({name: name})
        await req.user.deleteOne()
        res.status(200).json({message: "Subscriber has been successfully unsubscribed."})
    }
    catch(err){
        console.error(err)
        res.status(500).json({error: err})
    }

}

const login = async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: info.message });

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, name: user.name },
            'your_jwt_secret', // Change this to an environment variable
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'User authenticated', token });
    })(req, res, next);
};


const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};


export { mailer, unsubscribeUser, login, authenticateJWT }