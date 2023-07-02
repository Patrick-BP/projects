const mongoose = require ('mongoose')

const {Schema} = mongoose

const CategorySchema = new Schema({
    name: String  
}, {
    versionKey: false,
})

module.exports = mongoose.model('category', CategorySchema)