const docModel = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

module.exports = {
   // JWT SIGNING SECRET KEY
   secret: 'pochiisourdog',

   // Verifies JWT Token of the USER GET @@ PROTECTED ROUTES
   verifyToken: function(req, res, next) {
      var token = req.cookies.jwtToken;
      if(token){
         // Verifying Token
         jwt.verify(token, module.exports.secret, function(err, decode){
            if(err) return res.json({
               success: false,
               message: 'Token is not valid'
            });
             else{
               // req
               docModel.findOne({_id: decode.id}, (err, user) => {
                  req = user;
               })
               req.id = decode.id;
               next()
            }
         })
      }
      // Incase No Token Supplied
      else{
         return res.json({
            success: false,
            message: 'Auth token is not supplied'
          });
      }
   },


   // doctor registration function POST
   create: function (req, res, next) {
      docModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
         if (err)
            next(err);
         else
            res.redirect('/doctor/onboarding')

      });
   },

   // handles doctor onboarding process POST
   onboarding: function (req, res, next) {
      console.log(req.body, "this are main")
      console.log(req.id, "this is id")

      docModel.findByIdAndUpdate({_id : req.id}, 
         {
            degree: req.body.degree,
            specialisation: req.body.specialisation,
            medicalId: req.body.medicalId,
            clinicAddress: req.body.clinicAddress,
         }, 
         (err,doctor)=>{
         console.log(doctor)
         if(err) return next(err);
         res.redirect('/doctor/dashboard');
      })
   },


   logout: function(req,res,next) {
      res.redirect(301, "http://localhost:8000/")
   },

   //handles authentication on login form for Doctor POST
   authenticate: function (req, res, next) {
      // console.log(module.exports.secret)
      var password = req.body.password;
      var emails = req.body.email;
      console.log(password, 'this is password')
      console.log(emails, 'this is email')

      docModel.findOne({ email: emails }, function (err, userInfo) {
         if (err) {
            res.json({status: "error", message: "user not found"});
         }
         else {
            // var userInfo    = userInfo;
            // console.log(userInfo, 'this is userinfo')
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
               const token = jwt.sign({ id: userInfo._id}, module.exports.secret, { expiresIn: '1h' });
               res.cookie('jwtToken', token, { maxAge: 3600000 });
               if (!userInfo.degree || !userInfo.specialisation || !userInfo.medicalId || !userInfo.clinicAddress){
                  res.redirect(301, '/doctor/onboarding')
               }
               else{
                  //do something
                  res.redirect(301,'/doctor/dashboard');
                  console.log(userInfo.name, 'has completed onboarding')
               }
            } else {
               res.json({ status: "error", message: "Invalid email/password!!!", data: null });
            }
         }
      });
   },
}