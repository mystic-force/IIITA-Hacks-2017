var express = require('express');
var app = express();


var fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kanha@123#",
    database : "wanted",
});
    var pqr = 1 ;
var uname, name, email, pass;
module.exports.reg = function (req, res) {
    uname = req.body.username;
    name = req.body.name;
    email = req.body.email;
    pass = req.body.pass;
    con.connect(function(err) {
  if (err) throw err;   
        con.query("Select * from login where uname = ?",[uname], function(err, resq){
           if(err) throw err;
            console.log(resq.length);
            if(resq.length == 0)
             {
                 con.query("Insert into login values(?, ?, ?, ?)",[uname, name, email, pass], function(err, result){
                     if(err) throw err;
                    console.log("table done!");
                     res.send(name+ " " + uname);
            });
             }
            else
                {
                    pqr = 0;
                    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
                    res.send(text);
                });
                }
        });
        
       
});
}