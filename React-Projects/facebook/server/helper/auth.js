import jwt from 'jsonwebtoken';
require('dotenv').config();

exports.verifyUser = (req, res, next)=>{
    const token = req.cookies.token;
    if(token){
        return res.json({error: true, message:"You are not authenticated"})
    }else{
        jwt.verify(token, process.env.JWT_SECRET, {}, (error , user)=>{
            if(err) {
             return  res.json({error: true, message:"token is wrong"})
            }else{
                
            }
            
        });      
    }
}