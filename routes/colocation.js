const express = require('express');
const router = express.Router();
const colocationController = require('../controllers/colocationController');

// Créer une nouvelle colocation
router.post('/create', colocationController.createColocation);

module.exports = router;
