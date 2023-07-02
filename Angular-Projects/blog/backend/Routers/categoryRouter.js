const express = require('express');

const {getAllCategories, save, getCategoryById, updateCategoryById, deleteCategoryById } = require('../Controllers/categoryController')

const route = express.Router();

route.get('/', getAllCategories);
route.post('/new', save);
route.get('/:id', getCategoryById);
route.patch('/:id', updateCategoryById);
route.delete('/:id', deleteCategoryById)


module.exports = route;