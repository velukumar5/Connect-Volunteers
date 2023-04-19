var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');

var router = express.Router();
router.get('/',function(req,res){
    db.getallmed(function(err,result){
        res.render('storee.ejs',{list : result});
    })
    
});



router.get('/add_medd',function(req,res){
    res.render('add_medd.ejs');
});


router.post('/add_medd',function(req,res){
 var name = req.body.name;
 var p_date = req.body.p_date;
 var expire = req.body.expire;
 var e_date = req.body.e_date;
 var price = req.body.price;
 var quantity = req.body.quantity;

 db.addMed(name,p_date,expire,e_date,price,quantity,function(err,result){
    res.redirect('/storee');
 });

});

module.exports = router ;