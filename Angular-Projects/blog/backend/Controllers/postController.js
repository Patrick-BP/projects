const express = require('express')
const Post = require('../Models/postModel')
const {ObjectId} = require('mongodb')
const nodemailer = require('nodemailer');
const Subscribe  = require('../Models/subscriptionModel');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });

exports.getAllPosts = async (req, res)=>{
    try{
        response = await Post.find().populate('categoryId');
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(err.message);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Post(req.body).save();
        const subscribers = await Subscribe.find()

        subscribers.forEach(subscriber => {
            const mailOptions = {
                from: 'patrick.bihizi@gmail.com',
                to: subscriber.email,
                subject: result.title,
                html: `<h3>New article from BP-Blog</h3><div style="width:300px"><img src=${result.imgPath} style="width:100%"><h3 style="margin-top:5px; margin-bottom:5px">${result.title}</h3><p>${result.excerpt}</p><div>`
              };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error(error);
                } else {
                  console.log('Email sent:', info.response);
                }
              });   
        });

        res.status(200).json({error: false, message:null, data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.message, data:null});
    }

};

exports.getPostById = async(req, res)=>{

    try{
        const response = await Post.findById(req.params.id).populate('categoryId');
        console.log(response);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
    
};

exports.getPostByCategory = async(req, res)=>{

    try{
        const response = await Post.find({categoryId:req.params.id}).populate('categoryId');
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
    
};

exports.countViewsById = async(req, res)=>{
    
    try{
        const post = await Post.findById(req.params.id)
        const response = await Post.findOneAndUpdate({_id:req.params.id}, {views: post.views +1 });
        res.status(200).json({error: false, message:"Featured updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
}
exports.setFeaturedById = async(req, res)=>{
 
    try{
        
        const response = await Post.findOneAndUpdate({_id:req.params.id},req.body);
        res.status(200).json({error: false, message:"Featured updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
}


exports.updatePostById = async(req, res)=>{
    try{
        const response = await Post.findOneAndUpdate({_id:req.params.id});
        res.status(200).json({error: false, message:"post updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
}

exports.deletePostByid = async(req, res)=>{
        try{
            const response = await Post.findByIdAndDelete(req.params.id);
            res.status(200).json({error: false, message:"post updated successfuly", data: response});
        }catch(err){
            res.status(500).json({error: true, message: err.massage, data:null});
        }    

};