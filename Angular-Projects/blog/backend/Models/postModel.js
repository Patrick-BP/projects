const mongoose = require ('mongoose')

const {Schema} = mongoose

const PostSchema = new Schema({
    tilte: String,
    excerpt: String,
    permalink: String,
    categoryId: {type: Schema.Types.ObjectId,  ref:'category'},
    content: String,
    imgPath: String,
    isFeatured:{type: Boolean, default:false} ,
    views: {type: Number, default:0},
    status: String,
    
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Posts', PostSchema)