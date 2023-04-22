const express = require('express');
const User = require('../Models/userModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res)=>{
    try{
        const response = await User.find({});
        res.json({error:false, data:response});
    }catch(err){
        console.log(err.message);
        res.json({error:true, message: err.message });
    }
}
exports.addUser = async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(3876349850394857603984576398457039845739845);
        const hashPassword = (await bcrypt.hash(req.body.password, salt)).toString();

        const find = await User.findOne({email:req.body.email});
        if(find){
            res.json({error:true, message:"Email already exist"});
        }else{
            const newUser = req.body;
        newUser.password = hashPassword;
        const response = await new User(newUser).save();
        res.json({error:false, message:"New user Created", date:response});
        }
        
    }catch(err){
        console.log(err.message)
        res.json({error:true, message: "Failed to create user"})
    }
}
exports.deleteUser = async (req, res)=>{
    
    try{
        const response = await User.findOneAndDelete({_id:req.params.id});
        res.json({error:false, data:response});
    }catch(err){
        console.log(err.message);
        res.json({error:true, message: err.message });
    }
}