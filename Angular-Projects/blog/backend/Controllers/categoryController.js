const express = require('express')
const Category = require('../Models/categoryModel')
const {ObjectId} = require('mongodb')


exports.getAllCategories = async (req, res)=>{
    try{
        response = await Category.find();
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(response);
    }
    
};

exports.save = async (req, res)=>{
    try{
        const result = await new Category(req.body).save();
        res.status(200).json({error: false, message:null, data: result});

    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }

};

exports.getCategoryById = async(req, res)=>{
    try{
        const response = await Category.findById(req.params.id);
        res.status(200).json({error: false, message:null, data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
    

};

exports.updateCategoryById = async(req, res)=>{
    try{
        const response = await Category.findOneAndUpdate({_id:req.params.id}, req.body);
        res.status(200).json({error: false, message:"category updated successfuly", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};

exports.deleteCategoryById = async(req, res)=>{
    try{
        const response = await Category.findOneAndDelete({_id:req.params.id});
        res.status(200).json({error: false, message:"category has been deleted", data: response});
    }catch(err){
        res.status(500).json({error: true, message: err.massage, data:null});
    }
};