const mongoose = require('mongoose');
const {Schema} = mongoose;

const moviesSchema = new Schema({
     title:String,
     category: [{type:Schema.Types.ObjectId, ref:'Category'}],
     MovieYear: Date,
     addedDate: Date, 
     description: String,
     country: [{type:Schema.Types.ObjectId, ref:'Country'}],
     Director: String,
     Production:String,
     url:String


});

module.exports = mongoose.model('Movies', moviesSchema);