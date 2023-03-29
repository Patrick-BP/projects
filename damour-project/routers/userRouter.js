const express = require('express');
const usercontroller = require('../controllers/usercontroller')
const userRoute = express.Router();



userRoute.post('/login', usercontroller.signin)

// userRoute.use('', usercontroller.validateToken)

userRoute.post('/create', usercontroller.validateToken, usercontroller.createUser);
userRoute.get('/:email', usercontroller.validateToken, usercontroller.getUser)
userRoute.put('/update/:email', usercontroller.validateToken, usercontroller.updateUser)
userRoute.delete('/delete/:email', usercontroller.validateToken, usercontroller.deleteUser);

userRoute.get('/', usercontroller.validateToken, usercontroller.getAllUsers);

module.exports = userRoute; 