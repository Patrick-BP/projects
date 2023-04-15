const express = require("express");
const Response = require("../Model/ResponseObj");
const Category = require("../Model/categoryModel");

exports.getAllCategories = async (req, res) => {
  try {
    const result = await Category.find({});
    res.status(200).json(new Response(false, null, result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Something wrong happened!", null));
  }
};

exports.addCategory = async (req, res) => {

  try {
    const result = await new Category(req.body).save();
    res.status(201).json(new Response(false, "A new Category was added", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Adding New category Failed!", null));
}
};

exports.updateCategory = async (req, res) => {
    const data =req.body;
    
  try {
     const result = await Category.updateOne({_id:req.params.category_id}, data);
     res.status(200).json(new Response(false, "Changes were saved", result));
    } catch (error) {
      console.log(error.message);
      res.status(500).json(new Response(true, "Updating category Failed!", null));
    }
};

exports.deleteCategory = async (req, res) => {
  try {
  const result =  await Category.findByIdAndDelete({_id:req.params.category_id});
    res.status(200).json(new Response(false, "A Category was deleted", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Deleting category Failed!", null));
}
};

exports.searchCategory = async (req, res) => {
    const query = req.query.q
    try {
    const result =  await Category.find({$or:[{name:{$regex:query, $options:'i'}}]})
      res.status(200).json(new Response(false, "A Category was deleted", result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Deleting category Failed!", null));
  }
  };