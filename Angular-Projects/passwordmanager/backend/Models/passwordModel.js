const mongoose = require ('mongoose')

const {Schema} = mongoose

const PasswordSchema = new Schema({
    siteId: {type: Schema.Types.ObjectId},
    userId: {type:Schema.Types.ObjectId},
    email: String,
    username: String,
    password: String  
}, {
    versionKey: false,
})

module.exports = mongoose.model('password', PasswordSchema)