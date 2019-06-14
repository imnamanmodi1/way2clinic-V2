const express = require('express');
const router = express.Router();
const docController = require('../controller/doctor');


router.get('/onboarding', docController.verifyToken, (req,res) => {
  res.render('index')
})

router.post('/register', docController.create); //POST
router.post('/authenticate', docController.authenticate); //POST
router.post('/onboarding', docController.verifyToken,docController.onboarding); //POST


module.exports =router;