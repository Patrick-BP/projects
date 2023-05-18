const mongoose = require ('mongoose')

const {Schema} = mongoose

const RatingSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId},
    movieId:{type: mongoose.Schema.Types.ObjectId},
    rating:Number
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('ratings',  RatingSchema)