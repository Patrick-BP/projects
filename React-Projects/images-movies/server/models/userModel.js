
const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstname:{type: String, require:true},
    lastname: {type: String, require:true},
    about: String,
	favColor: String,
	gender: String,
	email: String,
	dob: String,
	luckNumber: Number,
	courseSatisfaction: Number,
	phone: String,
	education: String,
	hobbies: [{type:String}]
}, {
    versionKey: false
});

module.exports = mongoose.model('Users', UserSchema);