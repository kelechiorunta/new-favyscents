import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SubscriberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

SubscriberSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
const Subscriber =
  mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema)

export default Subscriber
