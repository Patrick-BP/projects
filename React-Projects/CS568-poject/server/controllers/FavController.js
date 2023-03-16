const express = require('express')
const Favmovie = require('../models/FavModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    try{
       const result = await Favmovie.find({userId:req.params.userId}).populate('movieId');
    res.json(result) 
    }catch(e){
        res.json(e)
    }
    
};


exports.delById = async (req, res) => {
    try{ 
      const del =  await Favmovie.deleteOne({userId:req.params.userId, movieId:req.params.movieId })
    res.json(del)
    }catch(e){
        console.log(e.message)
    }
    
};

exports.save = async (req, res) => {
    const find = await  Favmovie.findOne({userId:req.body.userId, movieId:req.body.movieId})
    if(!find){
        const result = await new Favmovie(req.body).save()
    res.json(result)
    }
   
};
