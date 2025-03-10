import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email: {type: String, required: true}
})

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);

export default Subscriber