const express = require('express');
const route = express.Router();
const storage = require('../storageImg')
const {addRoom, getAllRooms, deleteRoom} = require('../Controllers/RoomsController');


route.post('/add', addRoom);
route.get('/all', storage, getAllRooms);
route.delete('/del/:id', deleteRoom);


module.exports =  route