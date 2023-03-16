const express = require('express')
const Playlist = require('../models/PlayListModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    const result = await Playlist.find({userId:req.params.userId}).populate('Movies');
    res.json(result)
};


exports.delById = async (req, res) => {
    await Playlist.findByIdAndDelete(req.params.movieId)
    res.json({_id:req.params.movieId})
};

exports.save = async (req, res) => {
    const find = await Playlist.findOne({userId:req.body.userId, movieId:req.body.movieId})
    if(!find){
    const result = await new Playlist(req.body).save()
     res.json(result)
    }
 };
 