const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoute = require('./Routers/categoryRoute');
const productRoute = require('./Routers/productRoute');
const orderRoute = require('./Routers/orderRoute');
const dataRoute = require('./Routers/dataRoute');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000

app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute);
app.use('/data', dataRoute);

const mongooseConnect = async ()=>{
    try{
        mongoose.connect(MONGO_URL);
        app.listen(PORT , ()=> console.log("server listening on port " + PORT));
    }catch(error){
        console.log(error.message)
    }
}
mongooseConnect();
