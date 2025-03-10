import express from 'express';
import { mailer, unsubscribeUser } from './controllers/userController.js';
const router = express.Router();

const getusername = (req, res, next) => {
    req.username = req.params.name
    next()
}

router.post('/subscribe', mailer);
router.get('/unsubscribe/:name', getusername, unsubscribeUser);

export default router