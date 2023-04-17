const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email: {type: String, required: true},
    contact_number: String,
    payment_method: String,
    total: Number,
    product_details:[{
        product:String,
        price: Number,
        total: Number,
        category: String,
        quantity: Number

    }],
    created_by: {type: mongoose.Schema.Types.ObjectId, ref:"users"}

},{
    versionKey:false, 
    timestamps:true
});


module.exports = mongoose.model('orders', OrderSchema);