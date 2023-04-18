const express = require('express');
const {getAllBills, addBill, deleteBill, searchBill , generatePdf, fetchPdf} = require('../Controllers/billController')
const route =  express.Router();

route.get('/all', getAllBills);
route.post('/add', addBill);
route.delete('/delete/:Bill_id', deleteBill);
route.get('/search', searchBill);

route.post('/create-pdf', generatePdf);
route.get('/fetch-pdf', fetchPdf)
module.exports = route