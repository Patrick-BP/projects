const express = require('express');

const {getAllPosts, save, getPostById } = require('../Controllers/postController')

const route = express.Router();

route.get('/', getAllPosts);
route.post('/new', save);
route.get('/:id', getPostById);


module.exports = route;