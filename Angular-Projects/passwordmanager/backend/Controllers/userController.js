const express = require('express')
const User = require('../Models/userModel')
const {ObjectId} = require('mongodb');
const bcrypt = require('bcrypt')




exports.save = async (req, res)=>{
   const {name, email, password} = req.body;
  
    try{
        const finduser = await User.findOne({email})
        if(finduser){
            res.status(200).json({error: false, message:"Email exist already", data: null});
        }else{
            const result = await new User({name, email, password}).save();
            res.status(200).json({error: false, message:"User save successfully", data: result});
        }
        

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};
exports.login = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const findEmail = await User.findOne({email});
        
        if(findEmail){
            if(findEmail.password === password){
                const response = {
                    id: findEmail._id,
                    name:findEmail.name,
                    email: findEmail.email,
                }
                res.status(200).json({error: false, message:"Logged in succefuly!!", data: response});
            }else{
                res.status(401).json({error: false, message:"credentials are incorect", data: null});
            }
            
        }else{
            res.status(401).json({error: false, message:"User doesn't Exist", data: null});
        }
        
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    } 
};

exports.getUserById = async(req, res)=>{
    try{
        const response = await User.findById(req.params.id);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    } 
};

exports.updateUserById = async(req, res)=>{
    try{
        const response = await User.findOneAndUpdate({_id:req.params.id}, req.body);
        res.status(200).json({error: false, message:"User updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};

exports.deleteUserByid = async(req, res)=>{
    try{
        const response = await User.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"User has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};