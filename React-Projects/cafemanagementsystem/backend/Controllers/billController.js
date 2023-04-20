const express = require("express");
const Response = require("../Model/ResponseObj");
const Bill = require("../Model/orderModel");

const fs = require('fs');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents')


exports.getAllBills = async (req, res) => {
  try {
    const result = await Bill.find({});
    res.status(200).json(new Response(false, null, result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Something wrong happened!", null));
  }
};

exports.addBill = async (req, res) => {

  try {
    const result = await new Bill(req.body).save();
    res.status(201).json(new Response(false, "A new Bill was added", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Adding New Bill Failed!", null));
}
};

exports.updateBill = async (req, res) => {
    const data =req.body;
    
  try {
     const result = await Bill.updateOne({_id:req.params.Bill_id}, data);
     res.status(200).json(new Response(false, "Changes were saved", result));
    } catch (error) {
      console.log(error.message);
      res.status(500).json(new Response(true, "Updating Bill Failed!", null));
    }
};

exports.deleteBill = async (req, res) => {
  try {
  const result =  await Bill.findByIdAndDelete({_id:req.params.Bill_id});
    res.status(200).json(new Response(false, "A Bill was deleted", result));
} catch (error) {
  console.log(error.message);
  res.status(500).json(new Response(true, "Deleting Bill Failed!", null));
}
};

exports.searchBill = async (req, res) => {
    const query = req.query.q
    try {
    const result =  await Bill.find({$or:[{name:{$regex:query, $options:'i'}}]})
      res.status(200).json(new Response(false, "A Bill was deleted", result));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(new Response(true, "Deleting Bill Failed!", null));
  }
  };

