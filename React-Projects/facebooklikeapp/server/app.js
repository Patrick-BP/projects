const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./Routes/authRoutes')
const userRoute = require('./Routes/usersRoutes')
const postRoute = require('./Routes/postsRoutes')

const MONGODB = process.env.MONGODB;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

mongoose.connect(MONGODB)
.then(()=>{
    app.listen(PORT , ()=>console.log(`server running on port ${PORT}`))})
.catch(error=>console.log(error.message))    