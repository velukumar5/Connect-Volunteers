var express = require ('express');
var router = express.Router();
var db = require.main.require ('./models/db_controller');
var bodyPaser = require ('body-parser');



router.get('/',function(req,res){
    db.getallappointment(function(err,result){
        console.log(result);
        res.render('appointmentt.ejs',{list :result});
    })
    
});

router.get('/add_appointmentt',function(req,res){
    res.render('add_appointmentt.ejs');
});

router.post('/add_appointmentt',function(req,res){

    db.add_appointment(req.body.p_name,req.body.department,req.body.d_name,req.body.date,req.body.time,req.body.email,req.body.phone,function(err,result){
        res.redirect('/appointmentt');
    });

});

router.get('/add_appointmentt',function(req,res){
    res.render('add_appointmentt.ejs');
});

router.post('/add_appointmentt',function(req,res){

    db.add_appointment(req.body.p_name,req.body.department,req.body.d_name,req.body.date,req.body.time,req.body.email,req.body.phone,function(err,result){
        res.redirect('/landing');
    });

});
module.exports =router;