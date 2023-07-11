const express = require('express')
const Site = require('../Models/siteModel')
const {ObjectId} = require('mongodb')


exports.getAllSites = async (req, res)=>{
    try{
        response = await Site.find({userId: req.params.id});
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(response);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Site(req.body).save();
        res.status(200).json({error: false, message:"Site save successfully", data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getSiteById = async(req, res)=>{
    try{
        const response = await Site.findById(req.params.id);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
    

};

exports.updateSiteById = async(req, res)=>{
    try{
        const response = await Site.findOneAndUpdate({_id:req.params.id}, req.body);
        res.status(200).json({error: false, message:"Site updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};

exports.deleteSiteByid = async(req, res)=>{
    try{
        const response = await Site.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"Site has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};