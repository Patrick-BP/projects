const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routers/UserRouter');
const courseRouter = require('./routers/CourseRouter');


const app = express();

app.use(cors());
app.use(express.json())

let expressFileupload = require('express-fileupload');
app.use(expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true,
    }));
    
app.use('/users', userRouter);
app.use('/courses', courseRouter);

app.use((req, res, next)=>{
    res.status(404).send({error:'API NOT SUPPORTED'})
})
app.use((err, req, res, next)=>{
    res.status(500).send({error: err.message});
})


mongoose.connect('mongodb://127.0.0.1:27017/usersDB')
.then(()=>{
    app.listen(3001,()=>console.log("listening on Port", 3001));
})