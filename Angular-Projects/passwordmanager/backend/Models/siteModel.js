const mongoose = require ('mongoose')

const {Schema} = mongoose

const SiteSchema = new Schema({
    siteName: String,
    siteUrl: String,
    siteImgUrl: String  
}, {
    versionKey: false,
})

module.exports = mongoose.model('site', SiteSchema)