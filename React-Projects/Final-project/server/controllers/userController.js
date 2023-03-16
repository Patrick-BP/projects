const User = require("../models/userModel");
const {ObjectId} = require('mongodb');


exports.getAllUsers = async (req, res) => {
  res.json(await User.find());
};
exports.getOneUser = async (req, res) => {
  res.json(await User.findById(req.params.id));
};
exports.saveUser = async (req, res, next) => {
  try {
    const result = await new User(req.body).save();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
exports.updateOneUser = async (req, res) => {
    const result = await User.updateOne({_id:new ObjectId(req.params.id)}, req.body);
    res.json(result);
};
exports.deleteOneUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({_id:req.params.id})
};
