const express = require('express');
const storage = require('../helper/storageProfilePic')
const userController = require('../controllers/userController')
const router = express.Router();



router.patch('/:id', userController.updateOneUser);
router.delete('/del/:id', userController.deleteOneUser);
router.patch('/changepassword/:id', userController.changePassword);
router.patch('/pic/:userId',storage, userController.uploadProfilePic);
router.get('/:id',userController.getOneUser);

module.exports = router;