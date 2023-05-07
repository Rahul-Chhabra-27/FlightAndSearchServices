const express = require('express');
const { createCity } = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',createCity);

module.exports = router;
