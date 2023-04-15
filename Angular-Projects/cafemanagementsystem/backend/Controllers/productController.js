const express = require("express");
const Response = require("../Model/ResponseObj");
const Product = require("../Model/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await Product.find({}).populate('category_id');
    const response = result.map(product=>{
        return {...product.toObject(), category_id: product.category_id.name}
    });
   
    res.status(200).json(new Response(false, null, response));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Something wrong happened!", null));
  }
};

exports.addProduct = async (req, res) => {

  try {
    const result = await new Product(req.body).save();
    res.status(201).json(new Response(false, "A new Product was added", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Adding New Product Failed!", null));
}
};

exports.updateProduct = async (req, res) => {
    const data =req.body;
    
  try {
     const result = await Product.updateOne({_id:req.params.product_id}, data);
     res.status(200).json(new Response(false, "Changes were saved", result));
    } catch (error) {
      console.log(error.message);
      res.status(500).json(new Response(true, "Updating Product Failed!", null));
    }
};

exports.deleteProduct = async (req, res) => {
  try {
  const result =  await Product.findByIdAndDelete({_id:req.params.product_id});
    res.status(200).json(new Response(false, "A Product was deleted", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Deleting Product Failed!", null));
}
};

exports.searchProduct = async (req, res) => {
    const query = req.query.q
    try {
    const result =  await Product.find({$or:[{name:{$regex:query, $options:'i'}}]})
      res.status(200).json(new Response(false, "A Product was deleted", result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Deleting Product Failed!", null));
  }
  };