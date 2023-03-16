import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res)=>{
    try{
        const result =  await PostMessage.find();
        res.status(200).json(result)
    }catch(error){
        res.status(404).json({message: error.message})
    }
    
};

export const createPost = async (req, res)=>{
    try{
        const result =  await new PostMessage(req.body).save();
        res.status(201).json(result)
    }catch(error){
        res.status(409).json({message: error.message})
    }
    
};

export const updatePost = async (req, res)=>{
    const {id: _id} = req.params;
    const post= req.body;
    console.log(_id);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post With that id")
    try{
        const result =  await PostMessage.findByIdAndUpdate(_id, post, {new:true});
        res.status(201).json(result)
    }catch(error){
        res.status(409).json({message: error.message})
    }
    
};


export const deletePost = async (req, res)=>{
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post With that id")
    try{
        const result =  await PostMessage.findByIdAndRemove(_id);
        res.status(201).json(result)
    }catch(error){
        res.status(409).json({message: error.message})
    }
    
};

export const likePost = async (req, res)=>{
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post With that id")
    try{
        const post =  await PostMessage.findById(_id);
        const result =  await PostMessage.findByIdAndUpdate(_id, {likeCount:post.likeCount +1}, {new:true});
        res.status(201).json(result)
    }catch(error){
        res.status(409).json({message: error.message})
    }
    
}