const { ObjectId } = require('mongodb')
const mongoose = require ('mongoose')

const {Schema} = mongoose

const CommentSchema = new Schema({
    userId:{type:  mongoose.Schema.Types.ObjectId, ref: "users"},
    comment:String,
    parent_comment_id: String,
    movieId:String,
    isDeleted:{type:Boolean, default:false}
    
}, {timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('comments', CommentSchema)