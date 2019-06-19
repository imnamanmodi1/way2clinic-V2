const express = require('express');
const router = express.Router();
const docModel  = require('../models/Doctor')
const docController = require('../controller/doctor');



router.get('/onboarding', docController.verifyToken , (req,res) => {
  res.render('index')
})

router.get('/login', (req,res) => {
  res.render('index')
})

router.get('/editdoctor', docController.verifyToken, (req, res)=>{
  res.render('index')
})

router.get('/logout', docController.logout, (req,res) => {
  console.log('render index after logout')
  res.render('index')
})

router.get('/register', (req,res) => {
  res.render('index')
})
router.get('/profile/:id', (req,res) => {
  var id =  req.params.id
  docModel.findOne({_id : id}, (err, doctor) => {
    res.json({doctor : doctor})
  })
  res.render('index')
})

router.get('/logout', docController.logout)


// router.get('*', (err, res)=>{
//   res.render('index');
// })

router.post('/register', docController.create); //POST
router.post('/authenticate', docController.authenticate); //POST
router.post('/onboarding', docController.verifyToken,docController.onboarding); //POST


module.exports =router;