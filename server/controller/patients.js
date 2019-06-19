const patientModel = require('../models/Patient');  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

module.exports = {
    secret: 'altcampus',

    //user registration function POST
    create: function (req, res, next) {
        patientModel.create({name: req.body.name, 
            email: req.body.email, 
            phone: req.body.phoneNumber, 
            password: req.body.password}, 
            function(err, result){
            if(err)
            next(err);
            else{
            res.json({message: "User Created"})
            }
        })
    },

    authenticate: function(req, res, next){
        console.log("inside authenticate")
        var email = req.body.email;
        var password = req.body.password;

        patientModel.findOne({email: email}, function(err, patientInfo){
            if(err){
                res.json({status: 'error', message: 'user not found'});
            }
            else{
                if(bcrypt.compareSync(req.body.password, patientInfo.password)){
                    const token = jwt.sign({id: patientInfo._id}, module.exports.secret, {expiresIn: '1h'});
                    res.cookie('jwtToken', token, {maxAge: 3600000});
                    res.json({status: 'success', message: 'logged in'})
                }
            }
        })
    },
    
    // verifyToken: function (req, res, next) {
    //     var token = req.cookies.jwtToken;
    //     if(token){
    //         jwt.verify(token, module.exports.secret, function(err, authData){
    //             if(err) return res.json({
    //                 success: false,
    //                 message: 'Invalid token'
    //             });
    //             else{
    //                 patientModel.findOne({_id: authData.id}, (err, user)=>{
    //                     req = user;
    //                 })
    //                 req.id = authData.id;
    //                 next();
    //             }
    //         })
    //     }
    // }
}