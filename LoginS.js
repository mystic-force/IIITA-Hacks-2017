var express = require('express');
var app = express();


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
            if(resq.length != 0)
             {
                 console.log("Hiii" + resq[0].pass);
                 if(resq[0].pass == pass)
                     return res.send("Hii");
                 else
                     return res.send("Invalid Password");
             }
            else
                {
                    pqr = 0;
                    return res.send("Invalid username!!");
                }
        });
});
}