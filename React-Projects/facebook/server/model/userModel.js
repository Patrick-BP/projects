const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: String, 
    lname: String,
    email: {type:String, unique:true},
    password: String,
    dob: String,
    followers:[{type:mongoose.Types.ObjectId}],
    following:[{type:mongoose.Types.ObjectId}]
},{timestamps:true, versionKey:false});

module.exports = mongoose.model('user', UserSchema);