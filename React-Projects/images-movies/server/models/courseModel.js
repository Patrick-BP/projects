const mongoose = require ('mongoose')

const {Schema} = mongoose

const CourseSchema = new Schema({
    name:String,
    code:String,
    description:String,
    img:String
}, {
    versionKey: false
})

module.exports = mongoose.model('Courses', CourseSchema)