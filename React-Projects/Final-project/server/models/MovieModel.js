const mongoose = require ('mongoose')

const {Schema} = mongoose

const MovieSchema = new Schema({
    title:String,
    overview:String,
    popularity:String,
    releaseDate: Date,
    genre:String,
    language:String,
    director:String,
    type:String,
    country:String,
    bigimg:String,
    smallimg:String,
    isDeleted:{type:Boolean, default:false}
}, {
    versionKey: false
})

module.exports = mongoose.model('Movies',  MovieSchema)