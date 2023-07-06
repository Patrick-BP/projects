const express = require('express');

const {getAllPosts, save, getPostById, updatePostById, deletePostByid, getPostByCategory, setFeaturedById, countViewsById } = require('../Controllers/postController')

const route = express.Router();

route.get('/', getAllPosts);
route.post('/new', save);
route.get('/:id', getPostById);
route.get('/category/:id', getPostByCategory);
route.patch('/:id', updatePostById);
route.delete('/:id', deletePostByid)
route.patch('/featured/:id', setFeaturedById)
route.patch('/viewsCounter/:id', countViewsById)


module.exports = route;