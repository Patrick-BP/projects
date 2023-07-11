const express = require('express');

const {getAllPasswords, save, getPasswordById, updatePasswordById, deletePasswordByid } = require('../Controllers/passwordController')

const route = express.Router();

route.get('/site/:id', getAllPasswords);
route.post('/new/:id', save);
route.get('/:id', getPasswordById);
route.patch('/:id', updatePasswordById);
route.delete('/:id', deletePasswordByid)


module.exports = route;