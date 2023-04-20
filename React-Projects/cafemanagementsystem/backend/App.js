const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoute = require('./Routers/categoryRoute');
const productRoute = require('./Routers/productRoute');
const billRoute = require('./Routers/billRoute');
const orderRoute = require('./Routers/orderRoute');
const dataRoute = require('./Routers/dataRoute');
const path = require('path');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000

app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute);
app.use('/bill', billRoute);
app.use('/data', dataRoute);


app.post('/create-pdf', (req, res)=>{
    console.log(req.body);
    pdf.create(pdfTemplate(req.body),{}).toFile(`pdf/result.pdf`, (err)=>{
        if(err){
          res.send(Promise.reject()) ;
        }else{
          res.send(Promise.resolve()) ;
        }
       })
})
app.get('/fetch-pdf', (req, res)=>{
    res.sendFile(`${__dirname}/pdf/result.pdf`)
})

const mongooseConnect = async ()=>{
    try{
        mongoose.connect(MONGO_URL);
        app.listen(PORT , ()=> console.log("server listening on port " + PORT));
    }catch(error){
        console.log(error.message)
    }
}
mongooseConnect();
