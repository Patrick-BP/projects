const express = require("express");
const Response = require("../Model/ResponseObj");
const Order = require("../Model/orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const result = await Order.find({});
    res.status(200).json(new Response(false, null, result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Something wrong happened!", null));
  }
};

exports.addOrder = async (req, res) => {

  try {
    const result = await new Order(req.body).save();
    res.status(201).json(new Response(false, "A new Order was added", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Adding New Order Failed!", null));
}
};

exports.updateOrder = async (req, res) => {
    const data =req.body;
    
  try {
     const result = await Order.updateOne({_id:req.params.order_id}, data);
     res.status(200).json(new Response(false, "Changes were saved", result));
    } catch (error) {
      console.log(error.message);
      res.status(500).json(new Response(true, "Updating Order Failed!", null));
    }
};

exports.deleteOrder = async (req, res) => {
  try {
  const result =  await Order.findByIdAndDelete({_id:req.params.order_id});
    res.status(200).json(new Response(false, "A Order was deleted", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Deleting Order Failed!", null));
}
};

exports.searchOrder = async (req, res) => {
    const query = req.query.q
    try {
    const result =  await Order.find({$or:[{name:{$regex:query, $options:'i'}}]})
      res.status(200).json(new Response(false, "A Order was deleted", result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Deleting Order Failed!", null));
  }
  };