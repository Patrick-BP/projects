const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path')
const userRouter = require('./Routes/userRouter');
const roomRouter = require('./Routes/roomRouter')

const app = express();
app.use(express.json());
app.use(cors({origin:true}));
app.use("/public", express.static(path.join(__dirname,"/public")));

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

app.use('/user', userRouter);
app.use('/room', roomRouter);

mongoose.connect(DB)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`)))
.catch((err)=> console.log(err.message));