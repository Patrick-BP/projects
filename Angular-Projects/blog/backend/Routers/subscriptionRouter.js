const express = require('express');

const {getAllSubscribers, save, getSubscriberById, deleteSubscriberByid} = require('../Controllers/subscriptionController')

const route = express.Router();

route.get('/', getAllSubscribers);
route.post('/new', save);
route.get('/:id', getSubscriberById);
route.delete('/:id', deleteSubscriberByid)


module.exports = route;