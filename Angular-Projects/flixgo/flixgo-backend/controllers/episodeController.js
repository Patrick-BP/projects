const express = require('express')
const Episode = require('../models/EpisodeModel')
const {ObjectId} = require('mongodb')
const Response = require("../models/responseobj");

exports.getAll = async (req, res)=>{
    const result = await Episode.find({isDeleted:false});
    res.json(new Response(false, "getting Episodes successfully", result))
};

exports.save = async (req, res)=>{
  const {tvshow_Id,episode,season, url} = req.body;
    try{
const exist = await Episode.findOne({tvshow_Id, episode, season}) ;
if(exist){
    res.status(400).json(new Response(true, "episode exist allready", null))
}else{
    const result =  await new Episode(req.body).save()
    res.json(new Response(false, "Episode added successfully", result))
} 
 
    }catch(e){
        res.status(400).json(new Response(true,"Someting went Wrong", null))
    }
  
};

exports.getEpisodesTvshowById = async(req, res)=>{
    try{
        const result = await Episode.find({tvshow_Id:req.params.episId})
        res.json(new Response(false, "getting Episodes successfully", result))
    }catch(e){
        res.json(new Response(true, e.message, null)) 
    }
    

};

exports.getEpisodeTvshowById = async(req, res)=>{
    try{
        const result = await Episode.findOne({_id:req.params.episId, tvshow_Id:req.params.tvId })
        res.json(new Response(false, "getting Episodes successfully", result))
    }catch(e){
        res.json(new Response(true, e.message, null)) 
    }
    

};


exports.updateById = async (req, res) => {
try{
     const result = await Episode.updateOne({_id:new ObjectId(req.params.episId)}, req.body);
    res.json(new Response(false, "Changes were Saved successfully", {}));
}catch(e){
    res.json(new Response(true, "Changes Failed", null));
}
   
};
exports.delById = async (req, res) => {
    try{
      const result =  await Episode.deleteOne({_id:new ObjectId(req.params.episId)})
      res.json(new Response(false, "Episode has been deleted successfully", result));
    }catch(e){
        res.json(new Response(true, "Delete Failed", null));
    }
       

};
exports.updateVideoById = async (req, res) => {
            try{
                 const result = await Episode.findByIdAndUpdate({_id: ObjectId(req.params.episId) }, {$set:{videourl:req.file.location}},  {upsert: true});
                res.json(new Response(false, "video  Saved successfully",result));
            }catch(e){
                res.json(new Response(true, "Changes Failed", null));
            }
               
            };    