const express = require('express');
const router = express.Router()

router.get('/login', (err, res)=>{
  res.render('index');
})

module.exports =router;