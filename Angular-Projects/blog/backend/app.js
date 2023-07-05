const express = require('express');
const cors = require('cors');
const postRouter = require('./Routers/postRouter');
const categoryRouter = require('./Routers/categoryRouter')
const mongoose = require('mongoose');
const subscriptionRouter = require('./Routers/subscriptionRouter');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


const PORT =  process.env.PORT || 5000;
const MONGODB = process.env.MONGODB


    

app.use('/posts', postRouter);
app.use('/categories', categoryRouter);
app.use('/subscription', subscriptionRouter);


app.use((req, res, next)=>{
    res.status(404).send({error:'API NOT SUPPORTED'})
})
app.use((err, req, res, next)=>{
    res.status(500).send({error: err.message});
})


mongoose.connect(MONGODB)
.then(()=>{
    app.listen(PORT, ()=>console.log("listening on Port", PORT));
})