const Comment = require("../models/CommentModel");
const {ObjectId} = require('mongodb');


exports.getAll = async (req, res) => {
  res.json(await Comment.find());
};
exports.getById = async (req, res) => {
  res.json(await Comment.findById(req.params.id));
};
exports.save = async (req, res, next) => {
  try {
    const result = await new Comment(req.body).save();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
exports.updateById = async (req, res) => {
    const result = await Comment.updateOne({_id:new ObjectId(req.params.commentId)}, req.body);
    res.json(result);
};
exports.delById = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.commentId)
    res.json({_id:req.params.commentId})
};
