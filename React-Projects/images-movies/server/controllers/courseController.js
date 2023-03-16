const express = require('express')
const Course = require('../models/courseModel')
const {ObjectId} = require('mongodb')


exports.getAll = async (req, res)=>{
    const result = await Course.find();
    res.json(result)
};

exports.save = async (req, res)=>{
    console.log(req.files.file);
    await req.files.file.mv(`${__dirname}/uploads/${req.files.file.name}`)
    console.log(req.files.name);
    console.log(req.body);
//    const result =  await new Course(req.body).save()
//     res.json(result)
};

exports.getById = async(req, res)=>{
    res.json(await Course.findById(req.params.courseId))

};