const express = require('express');
const Post = require('../Models/postsModel');
const User = require('../Models/usersModel');

exports.createPost = async (req, res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }

};

exports.updatePost = async (req, res)=>{
    try{
        const post =  await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("the post has been updated");
        }else{
            res.status(403).json("you can update only your post");
        }
    }catch(err){
        res.status(500).json(err)
    }
};

exports.deletePost = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        }else{
            res.status(403).json("you can delete only your post");
        }
    
    }catch(err){
        res.status(500).json(err)
    }
};

exports.updateLike = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes: req.body.userId}});
            res.status(200).json("the post has been liked");
        }else{
            await post.updateOne({$pull:{likes: req.body.userId}});
            res.status(403).json("you post has been disliked");
        }
    }catch(err){
        res.status(500).json(err)
    }
};

exports.getPost = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
};


exports.getTimeLine = async (req, res)=>{
    try{
        const currentuser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentuser._id});
        const friendPosts = await Promise.all(
            currentuser.followings.map((friendId)=>{
                return Post.find({userId: friendId})
            })
        );
        res.json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err)
    }
};

