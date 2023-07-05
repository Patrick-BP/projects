const express = require('express')
const Subscription = require('../Models/subscriptionModel')
const {ObjectId} = require('mongodb')




exports.getAllSubscribers = async (req, res)=>{
    try{
        response = await Subscription.find().populate('categoryId');
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(err.message);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Subscription(req.body).save();
        res.status(200).json({error: false, message:"subscriber created successfully", data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.message, data:null});
    }

};

exports.getSubscriberById = async(req, res)=>{

    try{
        const response = await Subscription.findById(req.params.id).populate('categoryId');
        console.log(response);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
    
};


exports.deleteSubscriberByid = async(req, res)=>{
        try{
            const response = await Subscription.findByIdAndDelete(req.params.id);
            res.status(200).json({error: false, message:"post Subscriber successfuly", data: response});
        }catch(err){
            res.status(500).json({error: true, message: err.massage, data:null});
        }    

};