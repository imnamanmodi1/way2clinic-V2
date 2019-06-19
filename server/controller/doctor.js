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
            res.redirect('/doctor/login')

      });
   },

   // handles doctor onboarding process POST
   onboarding: function (req, res, next) {
      // console.log(req.body, "this are main")
      // console.log(req.id, "this is id")

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
         res.redirect('/');
      })
   },


   logout: function(req,res,next) {
      // res.session.destroy()
      res.clearCookie('jwtToken')
      res.redirect("http://localhost:8000/")
   },

   //@@ For Practo Verified Doc - handles authentication on login form for Doctor POST
   authenticate: function (req, res, next) {
      // console.log(module.exports.secret)
      var password = req.body.password;
      var emails = req.body.email;
      
      // Simple test to see if both are supplied for Authentication
      console.log(password, 'this is password')
      console.log(emails, 'this is email')

      // Find Doc in Practo DB using the EMAIL
      docModel.findOne({ email: emails }, function (err, userInfo) {
         if (err) {
            // if
            res.json({status: "error", message: "user doesn't exists"});
         }
         else {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
               const token = jwt.sign({ id: userInfo._id}, module.exports.secret, { expiresIn: '1h' });
               if (!userInfo.degree || !userInfo.specialisation || !userInfo.medicalId || !userInfo.clinicAddress){
                  // set Cookie & Headers for JWT Verification on protected routes
                  res.cookie('jwtToken', token);
                  res.header('x-auth-token', token)
                  // redirect if any of the field in doc is missing
                  res.redirect('/doctor/onboarding')
               }
               else{
                  //do something
                  const domain = 'localhost'; //dev change to PRACTO.COM
                  // set Cookie & Headers for JWT Verification on protected routes
                  res.cookie('jwtToken', token, { domain: domain, path : '/'})
                  res.redirect('/');
                  console.log(userInfo.name, 'has completed onboarding')
               }
            } else {
               res.json({ status: "error", message: "Invalid email/password!!!", data: null });
            }
         }
      });
   },
}