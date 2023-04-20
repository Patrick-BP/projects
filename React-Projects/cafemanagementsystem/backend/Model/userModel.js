const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    contact_number: {type:String, required: true},
    password: {type:String, required},
    role: {type:String, default:"user"},
    status: {type: Boolean, default: false}
    
},{
    versionKey:false, 
    timestamps:true
});


module.exports = mongoose.model('users', UserSchema);