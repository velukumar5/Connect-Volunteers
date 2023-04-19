var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');
const { check, validationResult } = require('express-validator');

module.exports = router;





router.get('/',function(req,res){
    db.getAllemployee(function(err,result){
        res.render('about.ejs');

    });
})
   
