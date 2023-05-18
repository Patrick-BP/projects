const express = require('express')
const Playlist = require('../models/PlayListModel')
const {ObjectId} = require('mongodb')
const Response = require("../models/responseobj");

exports.getAll = async (req, res)=>{
    
    try{
    
    const result = await Playlist.find({userId:ObjectId(req.params.userId)}).populate({path: 'movieId', model: 'Movies'});;
   
    res.json(new Response(false, " playlist" , result))
    }catch(e){
        res.json(new Response(true, e.message , null))
    }
};


exports.delById = async (req, res) => {
  
    try{
       result = await Playlist.deleteOne({userId:ObjectId(req.params.userId), movieId:ObjectId(req.params.movieId)})
       if(result){
        res.json(false)
             }else{
        res.json(true)
             }
             
    }catch(e){
        res.json(new Response(true, e.message , null))
    }
    
};

exports.save = async (req, res) => {

   try{
    const find = await Playlist.findOne({userId:ObjectId(req.params.userId), movieId:ObjectId(req.params.movieId)});
    if(!find){
    const result = await new Playlist(req.body).save()
     res.json(new Response(false, "added to playlist" , null))
    }
    
   }catch(e){
    res.json(new Response(true, "add to Failed" , null))
   }
    
 };
 

 exports.check = async (req, res) => {
    try{
     const result = await Playlist.findOne({userId:ObjectId(req.params.userId), movieId:ObjectId(req.params.movieId)});
     if(result){
res.json(true)
     }else{
res.json(false)
     }
     
     
       
    }catch(e){
        res.json(new Response(true, "check Failed" , null))
    }
    
};