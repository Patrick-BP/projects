const express = require('express')
const Tvshow = require('../models/TvshowModel');
const Episodes = require('../models/EpisodeModel')
const {ObjectId} = require('mongodb')
const Response = require("../models/responseobj");

exports.getAll = async (req, res)=>{
    const result = await Tvshow.find({isDeleted:false});
    res.json(new Response(false, "getting TVshows successfully", result))
};

exports.save = async (req, res)=>{
    try{
           
 const result =  await new Tvshow(req.body).save()
    res.json(new Response(false, "Tvshow added successfully", result))
    }catch(e){
        res.status(400).json(new Response(true, e.message, null))
    }
  
};

exports.getById = async(req, res)=>{
    const result = await Tvshow.findById(req.params.tvId)
    res.json(new Response(false, "getting TVshows successfully", result))

};

exports.updateById = async (req, res) => {
try{
     const result = await Tvshow.updateOne({_id:new ObjectId(req.params.tvId)}, req.body);
    res.json(new Response(false, "Changes were Saved successfully", {}));
}catch(e){
    res.json(new Response(true, "Changes Failed", null));
}
   
};
exports.delById = async (req, res) => {
    try{
    const deleteallEpisode = await Episodes.deleteMany({tvshow_Id:req.params.tvId})
      const result =  await Tvshow.deleteOne({_id:new ObjectId(req.params.tvId)})
      res.json(new Response(false, "TVshows has been deleted successfully", result));
    }catch(e){
        res.json(new Response(true, "Delete Failed", null));
    }
   
    
};
exports.updatePosterById = async (req, res) => {
        try{
             const result = await Tvshow.findByIdAndUpdate({_id: ObjectId(req.params.tvId) }, {$set:{thumbnail:req.file.location}},  {upsert: true});
            res.json(new Response(false, "Poster Saved successfully",result));
        }catch(e){
            res.json(new Response(true, "Changes Failed", null));
        }
           
        };
exports.filter = async (req, res) => {
    
    const genre = req.body.genre;
    const year = req.body.year;
    const country = req.body.country;
    const language = req.body.language;
    
    const start = new Date(year, 0, 1);
    const end = new Date(year, 12, 31);
    let filter = {};
    if(genre && year && country && language){
        filter = {...filter,
        genre:{ $in: [genre] },
        releaseDate: { $gte: start, $lt: end },
        country: country,
        language: language}
    }
    if(genre){
        filter = {...filter,  genre:{ $in: [genre] }}
    }
    if(year){
        filter = {...filter, releaseDate: { $gte: start, $lt: end }}
    }
    if(country){
        filter = {...filter,  country: country}
    }
    
  
    if(language){
        filter = {...filter, language: language,}
    }
    try{
    const result =  await Tvshow.find({
      
      ...filter,
        isDeleted: false
    
    });


      res.json(new Response(false, "filtered", result));
    }catch(e){
        res.json(new Response(true, e.message, null));
    }
   
};