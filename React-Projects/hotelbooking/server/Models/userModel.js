const mongoose = require('mongoose');


const UserSchema =  new mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
    isAdmin:{type:String, default:"user"}
},{timestamps:true, versionKey:false});

module.exports = mongoose.model('users', UserSchema);