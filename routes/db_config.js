var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con =mysql.createConnection({
    "host" : 'localhost',
    "user" : 'root',
    "password":'root',
    "database": 'ticket_rising'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Sql Connected..');
});

module.exports = con;