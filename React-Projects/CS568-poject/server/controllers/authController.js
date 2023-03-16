const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Response = require("../models/responseobj");

const SECRET = "THis is a secret!!";

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    let result;
    let validated;

    result = await User.findOne({ email: req.body.email , isDeleted:false});

    if (result) {
      validated = await bcrypt.compare(req.body.password, result.password);
    }

    if (result && validated) {
      const accessToken = jwt.sign(
        {
          id: result._id,
          email: result.email,
          iat: Date.now(),
        },
        SECRET
      );
      const { password, ...others } = result._doc;
      res.status(200).json(new Response(false, null, { others, accessToken }));
    } else {
      res.status(400).json(new Response(true, "Wrong Credentials", null));
    }
  } else {
    res
      .status(400)
      .json(new Response(true, "Please provide username or password", null));
  }
};

exports.authenticate = (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");
  console.log(token);
  try {
    let result = jwt.verify(token, SECRET);
    next();
  } catch (err) {
    res.status(400).json(new Response(true, "Invalid JWT", null));
  }
};
