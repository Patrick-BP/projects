const mongoose =  require('mongoose');

const RoomSchema = new mongoose.Schema({
    name:String,
    description:String,
    type:String,
    phone_number:String,
    max_count: Number,
    rent_per_day: Number,
    pictures:[String],

}, {versionKey: false})

module.exports = mongoose.model('rooms', RoomSchema);