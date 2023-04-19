var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');
const { check, validationResult } = require('express-validator');

module.exports = router;





router.get('/',function(req,res){
    db.getAllemployee(function(err,result){
        res.render('employeee.ejs',{employee : result});

    });
   
});

router.get('/add',function(req,res){
    res.render('add_employeee.ejs');
});

router.post('/add',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.contact;
    var join_date = req.body.date;
    var role = req.body.role;
    var salary = req.body.salary;

    db.add_employee(name,email,contact,join_date,role,salary,function(err,result){
        console.log('employee inserted!!');
        res.redirect('/employeee');
    });

});