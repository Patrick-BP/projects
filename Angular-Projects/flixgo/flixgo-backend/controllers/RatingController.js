const express = require('express')
const Rating = require('../models/RatingModel')
const {ObjectId} = require('mongodb')
const Response = require("../models/responseobj");
const Movie = require('../models/MovieModel')

exports.getAverage = async (req, res)=>{
    const result = await Tvshow.find({isDeleted:false});
    res.json(new Response(false, "getting TVshows successfully", result))
};

exports.save = async (req, res)=>{
    try{      
    const find = await Rating.findOne({userId:ObjectId(req.body.userId), movieId:ObjectId(req.body.movieId)})
    if(!find){
        const result =  await new Rating(req.body).save();
        const movieRatings = await Rating.find({movieId:ObjectId(req.body.movieId)})
        let num = movieRatings.length
        if(result){
            const average =  await Rating.aggregate([
                {
                    $match: {
                      movieId:ObjectId(req.body.movieId)
                    }
                  },
                {
                  $group: {
                    _id:"$movieId",
                    totalRating: { $sum: "$rating" }
                  }
                }
              ])
            
            const rate = (average[0].totalRating/num).toFixed(1)
            const updateMovie = await Movie.updateOne({_id:ObjectId(req.body.movieId)},{$set:{rating:rate}}, {$upsert:true})
            res.json(new Response(false, "rated successfully", average))
        }else{
            res.json(new Response(true, "rated failed", null))
        }
        
    }
    
    }catch(e){
        res.status(400).json(new Response(true,"Rating failed", null))
    }
  
};


exports.check = async(req, res)=>{
  
    try{
      const find = await Rating.findOne({userId:ObjectId(req.params.userId), movieId:ObjectId(req.params.movieId)})
      if(!find){
        res.json(new Response(false, "is Rated", false))
      }else{
        res.json(new Response(false, "is not Rated", true))
      }
    }catch(e){
      res.json(new Response(true, e.message, null))
    }
}