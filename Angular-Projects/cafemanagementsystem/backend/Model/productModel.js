const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name:{type:String, required: true},
    category_id: {type: mongoose.Schema.Types.ObjectId, ref:"categories"},
    description: String,
    price: {type: Number, required: true}

},{
    versionKey:false, 
    timestamps:true
});


module.exports = mongoose.model('products', ProductSchema);