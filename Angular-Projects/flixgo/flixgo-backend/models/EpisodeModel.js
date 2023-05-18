const mongoose = require ('mongoose')

const {Schema} = mongoose

const EpisonsSchema = new Schema({
    tvshow_Id:{type: Schema.Types.ObjectId, ref: 'Tvshows'},
    episode:String,
    season:String,
    title:String,
    videourl:String,
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('Episodes',  EpisonsSchema)