const { ObjectId } = require('mongodb')
const mongoose = require ('mongoose')

const {Schema} = mongoose

const CommentSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "users"}, 
    movieId:String,
    comment:String,
    replies: [
        {
         userId:{type: mongoose.Schema.Types.ObjectId, ref: "users"},
         message: String,
         createdAt:{type: Date, default: Date.now()}
        }],
    likes:{type:Number, default:0},
    dislikes: {type:Number, default:0},
    isDeleted:{type:Boolean, default:false}
    
}, {timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('comments', CommentSchema)