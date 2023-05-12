const express = require('express');
const { createCity, deleteCity, getCity, updateCity, getAllCities } = require('../../controllers/city-controller');
const { create } = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city',createCity);
router.delete('/city/:id',deleteCity);
router.get('/city/:id',getCity);
router.put('/city/:id',updateCity);
router.get('/city',getAllCities);


router.post('/flight',create);

module.exports = router;
