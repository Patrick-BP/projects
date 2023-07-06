const mongoose = require ('mongoose')

const {Schema} = mongoose

const CommentsSchema = new Schema({
    postId: String,
    name: String,
    comment: String
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Comment', CommentsSchema)