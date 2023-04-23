const express = require('express');
const Room = require('../Models/roomModel');


exports.getAllRooms = async (req, res)=>{
    try{
        const response = await Room.find({});
        res.json({error:false, data:response});
    }catch(err){
        console.log(err.message);
        res.json({error:true, message: err.message });
    }
}

exports.addRoom = async (req, res)=>{
    try{
       
        const response = await Room(req.body).save();
        res.json({error:false, message:"New Room Created", date:response});
    
    }catch(err){
        console.log(err.message)
        res.json({error:true, message: "Failed to create Room"})
    }
}
exports.deleteRoom = async (req, res)=>{
    
    try{
        const response = await Room.findOneAndDelete({_id:req.params.id});
        res.json({error:false, data:response});
    }catch(err){
        console.log(err.message);
        res.json({error:true, message: err.message });
    }
}