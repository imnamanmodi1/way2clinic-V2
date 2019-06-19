var express = require('express');
var router = express.Router();
var Doctor = require('../../models/Doctor');
var Patient = require('../../models/Patient')

router.get('/doctors', (req, res, next) => {
  Doctor.find({}, (err, doctors) => {
    if(err) return next(err)
    res.json({doctors : doctors})
  })
})

router.get('/patient', (req, res, next)=>{
  Patient.find({}, (err, patients)=>{
    if(err) return next(err)
    res.json({patients: patients})
  })
})

module.exports = router;