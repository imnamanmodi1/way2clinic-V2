const patientModel = require('../models/Patient');  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

module.exports = {
    secret: 'altcampus',

    //user registration function POST
    create: function (req, res, next) {
        patientModel.create({name: req.body.name, email: req.body.email, phone: req.body.phoneNumber, password: req.body.password}, function(err, result){
            if(err)
            next(err);
            else{
            res.json({message: "User Created"})
            }
        })
    },

    login: function(req, res, next){
        
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
                    if(!patientInfo.email || !patientInfo.password){
                        res.redirect('/patient/login')
                    }
                    else{
                        res.json({status: 'success', message: 'logged in'})
                    }
                }
            }
        })
    }
}