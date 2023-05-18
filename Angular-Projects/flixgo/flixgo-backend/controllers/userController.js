const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Response = require("../models/responseobj");
const { ObjectId } = require("mongodb");

const nodemailer = require('nodemailer');
require('dotenv').config();

exports.getAllUsers = async (req, res) => {

  try{
    const result = await User.find();
    const results = result.map((user)=>{
      return {_id:user._id, firstname:user.firstname,lastname:user.lastname, email:user.email, isActive:user.isActive,imgUrl:user.imgUrl, role:user.role}
    });
    res.json(new Response(false, "getting users successfuly", results));
  }catch(e){
    res.json(new Response(true, "getting users Failed", null));
  }
 
};



exports.getOneUser = async (req, res) => {
  try{
    const result = await User.findById(req.params.id);
 const results = {_id:result._id, firstname:result.firstname,lastname:result.lastname, email:result.email, isActive:result.isActive, imgUrl:result.imgUrl, role:result.role}
    
    res.json(new Response(false, "getting user successfuly", results));
  }catch(e){
    res.json(new Response(true, "getting user Failed", null));
  }

};

exports.saveUser = async (req, res, next) => {

  const findUser = await User.findOne({email: req.body.email})
  if(findUser){
res.json(new Response(true, "user Already Exist", null))
  }else{
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
    res.json(new Response(false, "User Created Successfully", result));
  } catch (error) {
    res.status(400).json(new Response(true, "Invalid Format!", null));
  }
  }
 
};


exports.updateOneUser = async (req, res) => {
  try{
    
  const result = await User.updateOne({_id: ObjectId(req.params.id) }, req.body);
  const user = await User.findOne({_id: ObjectId(req.params.id)});
  res.json(new Response(false, "updated successfully", user));
  }catch(e){
    res.json(new Response(true, "updated failed", null));
  }
 
};


exports.deleteOneUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ _id: req.params.id });
};


exports.changePassword = async (req, res)=>{
const userId = ObjectId(req.params.id)
  const { oldPassword, newPassword } = req.body;

  if (oldPassword && newPassword) {
    let result;
    let validated;

    result = await User.findOne({_id:userId});

    if (result) {
      validated = await bcrypt.compare(oldPassword, result.password);
      if(validated){
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(newPassword, salt);
          const response = await User.updateOne({_id:userId},{$set:{password:hashedPass}});
          res.json(new Response(false, "Password updated successfully", null));
      }else{
      res.json(new Response(true, "current password doesn't match", null))
    }

    }else{
      res.json(new Response(true, "user doesn't exist", null))
    }
  
 
}else{
  res.json(new Response(true, "Please provide current password and new password", null));
}


}



let transporter  = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})




exports.forgotPassword = async (req, res)=>{
  const result = await User.findOne({email: req.body.email});
  
  if(result){
    const salt = await bcrypt.genSalt(10);
    let randompassword = Math.random().toString(36).slice(-1).toUpperCase()+ Math.floor(Math.random() * 10) + Math.random().toString(36).slice(-7);
    newpassword = await bcrypt.hash(randompassword, salt);
    updatePass = await User.updateOne({email: req.body.email}, {$set:{password:newpassword}})

    let mailOptions = {
      from: process.env.EMAIL,
      to: result.email,
      subject: 'password by movie app',
      html: '<p> <b>Your Login details for movie app </b> <br><b>Email: </b>'+result.email+'<br> <b>Password: </b> '+randompassword+'</p>'
    };
    
    transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
        console.log(error);
      }else{
        console.log('Email sent: ' + info.response);
        
      }
    })
    res.status(200).json(new Response(false, "Your Password  has been sent to your Email.", null))
  }else{
    res.status(400).json(new Response(true, "The Email doesn't exist", null))
  }
}

exports.uploadProfilePic = async (req, res)=>{
 
  try{
    const result = await User.findByIdAndUpdate({_id: ObjectId(req.params.userId) }, {$set:{imgUrl:req.file.location}},  {upsert: true});
   
    res.json(new Response(false, "updated successfully", result));
    }catch(e){
      res.json(new Response(true, "updated failed", null));
    }
}