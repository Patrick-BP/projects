const User =  require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.saveUser = async (req, res)=>{
    
try{
    const findEmail = await User.findOne({email:req.body.email});
    if(findEmail){
        console.log("object");
        res.json({error:true, message:"Email already exist", data:null})
    }else{
        const user = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPass = bcrypt.hashSync(req.body.password, salt);
        user.password = hashedPass;
        console.log(user);
        const response = await new User(user).save();
        const newUser = response;
        newUser.password = 000;
        res.json({error:false, message:"user created successfuly", data:newUser})
    }
    
}catch(err){
    res.json({error:true, message:err.message, data:null})
}
};

exports.login = async (req, res)=>{
    
    try{
        const findEmail = await User.findOne({email:req.body.email});
        if(!findEmail){
            res.json({error:true, message:"User doesn't exist", data:null})
        }else{
            const user = req.body;
            const hashedPass = bcrypt.compareSync(user.password, findEmail.password);
            
          if(hashedPass){
            const{email, _id, fname, lname, } = findEmail;
           jwt.sign({email, id:_id, fname, lname}, process.env.JWT_SECRET, {}, (err, token)=>{
            if(err) throw err
            const data = findEmail;
            data.password = 000
            res.cookie('token',token) 
            });
         
        }else{
              res.json({error:true, message:"Password is incorrect", data:null})
          }
        }
        
    }catch(err){
        res.json({error:true, message:err.message, data:null})
    }
    };

    exports.getProfile = async (req, res)=>{
        const token = req.cookies;
        console.log("token",token);
        try{
            
            console.log(token);
            if(token){
                jwt.verify(token, process.env.JWT_SECRET, {}, (error , user)=>{
                    if(err) throw error;
                    console.log(user);
                    res.json(user)
                });      
            }else{
                res.json(null) 
            }
            
        }catch(err){
            res.json({error:true, message:"User not found", data:null})
        }
    }