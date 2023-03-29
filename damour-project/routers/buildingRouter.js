const express = require('express');
const buildingController = require('../controllers/builldingController')


const buildingRouter = express.Router();


buildingRouter.post('/create', buildingController.createBuilding)

buildingRouter.put('/:code/apartments',buildingController.createApt);

// buildingRouter.put('/:code/apartments/:code/:email/residents', buildingController.checkin);

buildingRouter.put('/checkin', buildingController.checkin);
buildingRouter.put('/checkout', buildingController.checkout);

module.exports = buildingRouter;