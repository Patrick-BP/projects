const mongoose = require ('mongoose')

const {Schema} = mongoose

const PlayListSchema = new Schema({
    userId:String,
    movieId:{type: Schema.Types.ObjectId, ref: 'Movies'}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('PlayList',  PlayListSchema)