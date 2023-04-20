const express = require('express');
const {getAllCategories, addCategory, updateCategory, deleteCategory, searchCategory } = require('../Controllers/categoryController')
const route =  express.Router();

route.get('/all', getAllCategories);
route.post('/add', addCategory);
route.put('/update/:category_id', updateCategory);
route.delete('/delete/:category_id', deleteCategory);
route.get('/search', searchCategory);

module.exports = route