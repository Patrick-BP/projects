const express = require('express')
const Movie = require('../models/MovieModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    const result = await Movie.find();
    res.json(result)
};

exports.save = async (req, res)=>{
    
   const result =  await new Movie(req.body).save()
    res.json(result)
};

exports.getById = async(req, res)=>{
    res.json(await Movie.findById(req.params.movieId))

};
exports.updateById = async (req, res) => {
    const result = await Movie.updateOne({_id:new ObjectId(req.params.commentId)}, req.body);
    res.json(result);
};
exports.delById = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};
