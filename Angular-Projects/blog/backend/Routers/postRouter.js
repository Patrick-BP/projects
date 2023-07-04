const express = require('express');

const {getAllPosts, save, getPostById, updatePostById, deletePostByid } = require('../Controllers/postController')

const route = express.Router();

route.get('/', getAllPosts);
route.post('/new', save);
route.get('/:id', getPostById);
route.patch('/:id', updatePostById);
route.delete('/:id', deletePostByid)


module.exports = route;