const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({ 
    username: String,
    password: String,
    role: String


});

module.exports = mongoose.model('Movies', moviesSchema);