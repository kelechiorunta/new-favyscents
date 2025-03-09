import express from 'express';
import { mailer } from './controllers/userController.js';
const router = express.Router();

router.post('/subscribe', mailer);

export default router