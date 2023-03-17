const express = require('express');
const User = require('../Models/usersModel');


exports.createUser = async (req, res)=>{

};

exports.updateUser = async (req, res)=>{

};

exports.getUser = async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
};