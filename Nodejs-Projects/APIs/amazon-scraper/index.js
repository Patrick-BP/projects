const express = require('express');
const axios = require('axios')

const app = express()
app.use(express.json())

const PORT =  process.env.PORT || 8000


app.get('/', (req, res)=>{
    res.json("Welcome to Amazon scaper API")
});


app.listen(PORT, ()=>console.log("server is running on port " + PORT))
