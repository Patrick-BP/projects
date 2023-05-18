const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Response = require("../models/responseobj");


require('dotenv').config();


exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    let result;
    let validated;

    result = await User.findOne({ email: req.body.email , isActive:true});

    if (result) {
      validated = await bcrypt.compare(req.body.password, result.password);
    }

    if (result && validated) {
      const accessToken = jwt.sign(
        {
          _id: result._id,
          firstname: result.firstname,
          lastname: result.lastname,
          email: result.email,
          role: result.role,
          imgUrl:result.imgUrl,
          iat: Date.now(),
        },
        process.env.SECRET,
        {expiresIn:'8h'}
      );
      const { password, ...others } = result._doc;
      res.status(200).json(new Response(false, "Welcome "+result._doc.firstname, accessToken));
    } else {
      res.status(400).json(new Response(true, "Incorrect Email or password", null));
    }
  } else {
    res.status(400).json(new Response(true, "Please provide username or password", null));
  }
};

exports.authenticate = (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");
 
  try {
    let result = jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    res.status(400).json(new Response(true, "Invalid JWT", null));
  }
};


