const mongoose = require ('mongoose')

const {Schema} = mongoose

const PostSchema = new Schema({
    tilte: String,
    except: String,
    category: {type:  ref:},
    content: String,
    imgPath: String
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Posts', PostSchema)