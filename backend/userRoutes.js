import express from 'express';
import { mailer } from './controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/', mailer);

export default userRouter