const mongoose = require ('mongoose')

const {Schema} = mongoose

const CommentSchema = new Schema({
    userId:String,
    comment:String,
    parent_comment_id: String,
    movieId:String,
    created_date: {type: Date ,  default : Date.now},
    isDeleted:{type:Boolean, default:false}
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Comments', CommentSchema)