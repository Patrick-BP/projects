const express = require('express')
const Movie = require('../models/MovieModel');
const TvShow = require('../models/TvshowModel')
const {ObjectId} = require('mongodb')
const Response = require("../models/responseobj");

exports.getAll = async (req, res)=>{
    const result = await Movie.find({isDeleted:false});
    res.json(new Response(false, "getting movies successfully", result))
};

exports.save = async (req, res)=>{
    try{
 const result =  await new Movie(req.body).save()
    res.json(new Response(false, "movie added successfully", result))
    }catch(e){
        res.status(400).json(new Response(true, "Failed to add", null))
    }
  
};

exports.getById = async(req, res)=>{
    const result = await Movie.findById(req.params.movieId)
    res.json(new Response(false, "getting movies successfully", result))

};

exports.updateById = async (req, res) => {
try{
     const result = await Movie.updateOne({_id:new ObjectId(req.params.movieId)}, req.body);
    res.json(new Response(false, "Changes were Saved successfully", {}));
}catch(e){
    res.json(new Response(true, "Changes Failed", null));
}
   
};
exports.updatePosterById = async (req, res) => {
    
    try{
         const result = await Movie.findByIdAndUpdate({_id: ObjectId(req.params.movieId) }, {$set:{thumbnail:req.file.location}},  {upsert: true});
        res.json(new Response(false, "Poster Saved successfully",result));
    }catch(e){
        res.json(new Response(true, "Changes Failed", null));
    }
       
    };

exports.updateVideoById = async (req, res) => {
        try{
             const result = await Movie.findByIdAndUpdate({_id: ObjectId(req.params.movieId) }, {$set:{videourl:req.file.location}},  {upsert: true});
            res.json(new Response(false, "video  Saved successfully",result));
        }catch(e){
            res.json(new Response(true, "Changes Failed", null));
        }
           
        };    
exports.delById = async (req, res) => {
    try{
      const result =  await Movie.deleteOne({_id:new ObjectId(req.params.movieId)})
      res.json(new Response(false, "Movie has been deleted successfully", result));
    }catch(e){
        res.json(new Response(true, "Delete Failed", null));
    }
   
};

exports.search = async (req, res) => {
    
    try{
      const result =  await Movie.find({title:{$regex:req.params.search}})

      res.json( result);
    }catch(e){
        res.json(new Response(true, e.message, null));
    }
   
};

exports.filter = async (req, res) => {
    
    const genre = req.body.genre;
    const year = req.body.year;
    const quality = req.body.quality;
    const country = req.body.country;
    const rating = req.body.rating;
    const language = req.body.language;
    
    const start = new Date(year, 1, 1);
    const end = new Date(year, 12, 31);

    let filter = {};
    if(genre && year && quality && rating && language){
        filter = {...filter,
        genre:{ $in: [genre] },
        releaseDate: { $gte: start, $lt: end },
        country: country,
       quality: quality,
        rating: {$gte:rating},
        language: language}
    }
    if(genre){
        filter = {...filter,  genre:{ $in: [genre] }}
    }
    if(year){
        filter = {...filter, releaseDate: { $gte: start, $lt: end }}
    }
    if(quality){
        filter = {...filter,  quality: quality}
    }
    if(rating){
        filter = {...filter, rating: {$gte:rating}}
    }
    if(language){
        filter = {...filter, language: language,}
    }
    if(country){
        filter = {...filter, country: country,}
    }
    try{
    const result =  await Movie.find({
      
      ...filter,
        isDeleted: false
    
    });

      res.json(new Response(false, "filtered", result));
    }catch(e){
        res.json(new Response(true, e.message, null));
    }
   
};