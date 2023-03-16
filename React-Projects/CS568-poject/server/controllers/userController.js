const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Response = require("../models/responseobj");
const { ObjectId } = require("mongodb");

exports.getAllUsers = async (req, res) => {
  res.json(await User.find());
};
exports.getOneUser = async (req, res) => {
  res.json(await User.findById(req.params.id));
};
exports.saveUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPass,
    };
    const result = await new User(newUser).save();
    res.json(result);
  } catch (error) {
    res.status(400).json(new Response(true, "invalid format!", null));
  }
};
exports.updateOneUser = async (req, res) => {
  const result = await User.updateOne(
    { _id: new ObjectId(req.params.id) },
    req.body
  );
  res.json(result);
};
exports.deleteOneUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ _id: req.params.id });
};
