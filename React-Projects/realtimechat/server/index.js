const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {default: axios} = require('axios')

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

const app = express();
app.use(cors({origin:true}));
app.use(express.json());


app.post("/authenticate", async (req, res)=>{
    const {username} = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret:username, first_name: username},
            {headers: {"private-key":process.env.PRIVATE_KEY}}
        );
       
        return res.status(r.status).json(r.data);
    }catch(err){
      
        return res.status(err.response.status).json(err.response.data)
    }
    
});

app.listen(PORT, ()=> console.log(`server running on port:  ${PORT}`))