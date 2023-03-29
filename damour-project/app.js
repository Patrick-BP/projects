const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



 const userRoute = require('./routers/userRouter')
 const buildingRoute = require('./routers/buildingRouter')



const MONGODB = process.env.MONGODB 
const PORT  = 4000 || process.env.PORT  
const app = express();
app.use(cors());
app.use(express.json());



app.use('/user', userRoute)
app.use('/building', buildingRoute)

app.use((req,res,next)=>{
    res.status(501).send('wrong API')
})

//handler

app.use((error,req,res,next)=>{
    if(error && error.message){
        res.status(500).send(error.message)
    }else{
        res.status(500).send('Api is not supported')
    }
})

app.use((req,res,next)=>{
    res.status(501).send('wrong API')
})


mongoose.connect(MONGODB)
.then(()=>console.log('mongodb connected'))
.then(()=>{
    app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))})
    
.catch(error=> console.log(error.message))