const express = require('express')
const Password = require('../Models/passwordModel')
const {ObjectId} = require('mongodb');
const bcrypt = require('bcrypt')


exports.getAllPasswords = async (req, res)=>{
    try{
        response = await Password.find({siteId: req.params.id});
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(response);
    }
    
};

exports.save = async (req, res)=>{
    const obj = req.body;
    obj.siteId = req.params.id
    try{
        const result = await new Password(obj).save();
        res.status(200).json({error: false, message:"Password save successfully", data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getPasswordById = async(req, res)=>{
    try{
        const response = await Password.findById(req.params.id);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    } 
};

exports.updatePasswordById = async(req, res)=>{
    try{
        const response = await Password.findOneAndUpdate({_id:req.params.id}, req.body);
        res.status(200).json({error: false, message:"Password updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};

exports.deletePasswordByid = async(req, res)=>{
    try{
        const response = await Password.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"Password has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};