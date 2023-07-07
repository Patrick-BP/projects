const express = require('express');

const {getAllSites, save, getSiteById, updateSiteById, deleteSiteByid } = require('../Controllers/postController')

const route = express.Router();

route.get('/', getAllSites);
route.post('/new', save);
route.get('/:id', getSiteById);
route.patch('/:id', updateSiteById);
route.delete('/:id', deleteSiteByid)


module.exports = route;