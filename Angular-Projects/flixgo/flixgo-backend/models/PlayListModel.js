const mongoose = require ('mongoose')

const {Schema} = mongoose

const PlayListSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId},
    movieId:{type: mongoose.Schema.Types.ObjectId, ref: 'Movies', strickPopulate:true}
},{timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('PlayList',  PlayListSchema)