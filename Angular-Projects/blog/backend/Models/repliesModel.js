const mongoose = require ('mongoose')

const {Schema} = mongoose

const RepliesSchema = new Schema({
    commentId: {type: Schema.Types.ObjectId},
    name: String,
    reply: String
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('reply', RepliesSchema)