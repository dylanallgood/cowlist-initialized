const express = require('express');
const cowController = require('../controller/controllers');

const router = express.Router();

router.post('/api/cows', cowController.createCow);
router.get('/api/cows', cowController.getCow);

module.exports = router;
