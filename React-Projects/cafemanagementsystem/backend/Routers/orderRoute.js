const express = require('express');
const {getAllOrders, addOrder, updateOrder, deleteOrder, searchOrder } = require('../Controllers/orderController')
const route =  express.Router();

route.get('/all', getAllOrders);
route.post('/add', addOrder);


module.exports = route