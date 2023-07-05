const mongoose = require ('mongoose')

const {Schema} = mongoose

const SubscriptionSchema = new Schema({
   name:String,
   email:String
    
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('subscription', SubscriptionSchema)