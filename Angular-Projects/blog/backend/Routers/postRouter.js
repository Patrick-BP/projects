const express = require('express');

const {getAllPosts, save, getPostById, updatePostById } = require('../Controllers/postController')

const route = express.Router();

route.get('/', getAllPosts);
route.post('/new', save);
route.get('/:id', getPostById);
route.patch('/:id', updatePostById);


module.exports = route;