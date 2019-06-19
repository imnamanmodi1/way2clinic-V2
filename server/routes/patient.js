const express = require('express');
const router =  express.Router();
const patientController = require('../controller/patients');

router.post('/register', patientController.create);
router.post('/authenticate', patientController.authenticate);

module.exports = router;