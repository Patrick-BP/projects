const express = require('express')
const {createPost, updatePost, deletePost, updateLike, getPost, getTimeLine } = require('../Controllers/postsController');
const route = express.Router();

route.post("/", createPost);
route.put('/:id', updatePost);
route.delete('/:id', deletePost)
route.put('/:id/like', updateLike);
route.get('/:id', getPost);
route.get('/timeline/:userId', getTimeLine);

module.exports = route;