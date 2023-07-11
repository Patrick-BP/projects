const mongoose = require ('mongoose')

const {Schema} = mongoose

const SiteSchema = new Schema({
    userId: {type:Schema.Types.ObjectId},
    siteName: String,
    siteUrl: String,
    siteImgUrl: String  
}, {
    versionKey: false,
})

module.exports = mongoose.model('site', SiteSchema)