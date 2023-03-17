const express = require('express')
const {createPost, updatePost } = require('../Controllers/postsController');
const route = express.Router();

route.post("/", createPost);
route.put('/:id', updatePost)

module.exports = route;