import express from 'express'
import {
  authenticateJWT,
  getUser,
  login,
  logout,
  mailer,
  signup,
  unsubscribeUser,
} from './controllers/userController.js'
import Subscriber from './models/Subscriber.js'
const router = express.Router()

const getusername = async (req, res, next) => {
  const name = req.params.name

  try {
    const subscriber = await Subscriber.findOne({ name: name })
    if (!subscriber) {
      return res.status(404).json({ error: 'No such subscriber' })
    }
    req.user = subscriber
    next()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
}

router.post('/subscribe', mailer)
router.post('/login', login)
router.post('/signup', signup)
router.get('/unsubscribe/:name', getusername, unsubscribeUser)
router.get('/session', authenticateJWT, getUser)
router.get('/logout', logout)

export default router
