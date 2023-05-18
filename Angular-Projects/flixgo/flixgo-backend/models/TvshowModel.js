const mongoose = require ('mongoose')

const {Schema} = mongoose

const TvshowSchema = new Schema({
    title:String,
    overview:String,
    releaseDate: Date,
    genre:[String],
    language:String,
    director:String,
    type:String,
    country:String,
    thumbnail:String,
    isDeleted:{type:Boolean, default:false}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('Tvshows',  TvshowSchema)