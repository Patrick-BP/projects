const mongoose = require ('mongoose')

const {Schema} = mongoose

const MovieSchema = new Schema({
    title:String,
    overview:String,
    releaseDate: Date,
    genre:[String],
    language:String,
    director:String,
    quality:String,
    country:String,
    rating:{type:Number, default:0},
    thumbnail:String,
    videourl:String,
    isDeleted:{type:Boolean, default:false}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('Movies',  MovieSchema)