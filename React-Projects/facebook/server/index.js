const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter')

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000
const DB = process.env.DB

app.use('/user', userRouter);

const  mongooseConnect = async ()=>{
    try{
        mongoose.connect(DB)
        app.listen(PORT, ()=> console.log(`Server runs at  ${PORT}`))
    }catch(err){
        console.log(err.message);
    }
    
}
mongooseConnect()