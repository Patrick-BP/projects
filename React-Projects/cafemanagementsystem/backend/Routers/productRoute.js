const express = require('express');
const {getAllProducts, addProduct, updateProduct, deleteProduct, searchProduct } = require('../Controllers/productController')
const route =  express.Router();

route.get('/all', getAllProducts);
route.post('/add', addProduct);
route.put('/update/:product_id', updateProduct);
route.delete('/delete/:product_id', deleteProduct);
route.get('/search', searchProduct);

module.exports = route