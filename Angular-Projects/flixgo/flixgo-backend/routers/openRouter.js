const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();



router.patch('/forgotpassword', userController.forgotPassword);
router.post('/signup', userController.saveUser);
module.exports = router;