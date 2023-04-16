const express = require("express");
const Response = require("../Model/ResponseObj");
const Category = require("../Model/categoryModel");
const Product = require("../Model/productModel");
const Order = require("../Model/orderModel");

exports.getLengths = async (req, res) => {
  try {
    const cat = (await Category.find({})).length;
    const prod = (await Product.find({})).length;
    const ord = (await Order.find({})).length;
    res.status(200).json(new Response(false, null, {prod, ord, cat}));
  } catch (error) {
    
    res.status(500).json(new Response(true, "Something wrong happened!", null));
  }
};

