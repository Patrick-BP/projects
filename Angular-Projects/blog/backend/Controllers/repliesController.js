const express = require('express')
const Reply = require('../Models/repliesModel')
const {ObjectId} = require('mongodb')


exports.getAllReplies= async (req, res)=>{
    try{
        response = await Reply.find();
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(response);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Reply(req.body).save();
        res.status(200).json({error: false, message:"Reply saved", data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getAllRepliesByCommentId = async(req, res)=>{
        const commentId = req.params.id;
    try{
        const response = await Reply.find({commentId:commentId});
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err.massage);
    }
    

};

exports.getReplysById = async(req, res)=>{
    try{
        const response = await Reply.findById(req.params.id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err.massage);
    }
    

};



exports.deleteRepliesById = async(req, res)=>{
    try{
        const response = await Reply.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"Reply has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};