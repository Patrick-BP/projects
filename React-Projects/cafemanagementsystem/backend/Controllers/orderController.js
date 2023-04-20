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

