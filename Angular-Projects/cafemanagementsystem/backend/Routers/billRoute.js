const express = require('express');
const {getAllBills, addBill, updateBill, deleteBill, searchBill } = require('../Controllers/billController')
const route =  express.Router();

route.get('/all', getAllBills);
route.post('/add', addBill);
route.put('/update/:Bill_id', updateBill);
route.delete('/delete/:Bill_id', deleteBill);
route.get('/search', searchBill);

module.exports = route