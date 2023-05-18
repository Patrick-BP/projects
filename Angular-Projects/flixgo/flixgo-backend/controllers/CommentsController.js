const Comment = require("../models/CommentModel");
const {ObjectId} = require('mongodb');
const Response = require("../models/responseobj");

exports.getAllComnts = async (req, res) => {
  try{
      const result = await Comment.find({movieId: req.params.movieId, isDeleted:false})
      .populate('userId')
      .populate({path: 'replies.userId', model: 'users'});
      
      res.json(new Response(false, "Comment fetched successfully",result));

  }catch(e){
    res.json(new Response(true, "Getting Comment failed",null));
  }
  
};
exports.getById = async (req, res) => {
  try{
    const result = await Comment.findById(req.params.commentId)
    res.json(new Response(false, "Comment  fetched successfully",result));

  }catch(e){
    res.json(new Response(true, "Getting comment failed",null));
  }
  
};
exports.save = async (req, res) => {
  try {
    const result = await new Comment(req.body).save();
    res.json(new Response(false, "Comment  saved successfully",result));

  }catch(e){
    res.json(new Response(true, "Saving comment failed",null));
  }
};
exports.updateById = async (req, res) => {
  try{
    const result =  await Comment.updateOne({_id:new ObjectId(req.params.commentId)}, req.body);
    res.json(new Response(false, "Comment  updated successfully",result));

  }catch(e){
    res.json(new Response(true, "updating comment failed",null));
  }
    
};
exports.delCommentById = async (req, res) => {
  const commentId= req.params.commentId;
 
try{
    const result = await Comment.updateOne({ _id: ObjectId(commentId) }, { $set: { isDeleted: true } });
    res.json(new Response(false, "Comment  deleted successfully",null));

  }catch(e){
    res.json(new Response(true, e.message,null));
  }
    
};

exports.delReplyById = async (req, res) => {
  const replyId = req.params.replyId;
  const commentId = req.params.CommentId;
  
try{
    const result = await Comment.updateMany({}, {$pull:{replies:{_id:replyId}}});
    res.json(new Response(false, "reply  deleted successfully",null));

  }catch(e){
    res.json(new Response(true, e.message,null));
  }
 
};


exports.saveReply = async (req, res) => {
  const { userId, commentId, message} = req.body;
  const reply = {userId, message}
  try {
    const result = await  Comment.updateOne({_id:commentId},{$push:{replies:reply}},  {upsert: true});
    res.json(new Response(false, "Reply  Saved successfully",result));
  } catch (error) {
    res.json(new Response(true, "Reply failed. Try again later",null));
  }
};

// 