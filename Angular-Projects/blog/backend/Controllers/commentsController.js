const express = require('express')
const Comment = require('../Models/commentsModel')
const {ObjectId} = require('mongodb')


exports.getAllComments = async (req, res)=>{
    try{
        response = await Comment.find();
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(response);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Comment(req.body).save();
        res.status(200).json({error: false, message:"comment saved", data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getCommentsById = async(req, res)=>{
    try{
        const response = await Comment.findById(req.params.id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err.massage);
    }
    

};



exports.deleteCommentsById = async(req, res)=>{
    try{
        const response = await Comment.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"Comment has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};