const express = require('express');
const {getAllOrders, addOrder, updateOrder, deleteOrder, searchOrder } = require('../Controllers/orderController')
const route =  express.Router();

route.get('/all', getAllOrders);
route.post('/add', addOrder);
route.put('/update/:order_id', updateOrder);
route.delete('/delete/:order_id', deleteOrder);
route.get('/search', searchOrder);

module.exports = route