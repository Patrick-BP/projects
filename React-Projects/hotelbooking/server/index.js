const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({origin:true}));


const PORT = process.env.PORT || 5000;
const DB = process.env.DB;




mongoose.connect(DB)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`)))
.catch((err)=> console.log(err.message));