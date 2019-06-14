const express = require('express');
const router = express.Router();
const docController = require('../controller/doctor');


// handles doctor's login GET
// router.get('/login', (err, res)=>{
//   res.render('index');
// })

// // handles doctor's register GET
// router.get('/register', (err, res)=>{
//   res.render('index');
// })

// // handles doctor's onBoarding GET
// router.get('/onboarding', (err, res)=>{
//   res.render('index');
// })


router.post('/register', docController.create); //POST
router.post('/authenticate', docController.authenticate); //POST

module.exports =router;