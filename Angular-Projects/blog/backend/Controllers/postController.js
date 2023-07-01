const express = require('express')
const Post = require('../Models/postModel')
const {ObjectId} = require('mongodb')


exports.getAllPosts = async (req, res)=>{
    res.json("all posts");
};

exports.save = async (req, res)=>{
    try{
        const result = await new Post(req.body).save();
        res.status(200).json({error: false, message:null, data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getPostById = async(req, res)=>{
    res.json("post");  

};