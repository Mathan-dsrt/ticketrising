var express = require('express');
var router = express.Router();
var sql_con = require('./db_config');
var sql_res;

router.get('/', function(req,res){
    res.send('Ticket Rising API Connected..')
});

router.get('/userName', function(req,res){
    sql_con.query("select * from login",function(err, result,fields){
        if(err) throw err;
        sql_res = result;
        const id = req.query.id;
        res.send('('+ sql_res[id].usercode + "'s) Email Id: " + sql_res[id].email_id);
    })
    
});


module.exports = router;