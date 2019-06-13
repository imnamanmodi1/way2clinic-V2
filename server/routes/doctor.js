const express = require('express');
const router = express.Router();
const docController = require('../controller/doctor');

router.get('/login', (err, res)=>{
  res.render('index');
})

router.get('/register', (err, res)=>{
  res.render('index');
})

router.post('/register', docController.create);
router.post('/authenticate', docController.authenticate);

module.exports =router;