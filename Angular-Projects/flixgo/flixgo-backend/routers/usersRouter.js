const express = require('express');

const userController = require('../controllers/userController')
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id',userController.getOneUser);
router.patch('/:id', userController.updateOneUser);
router.delete('/del/:id', userController.deleteOneUser);




module.exports = router;