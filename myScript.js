var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var lin = require('./LoginS');
var sin = require('./SignupS');
var sess;
var session = require('express-session');
app.engine('html', require('ejs').renderFile);
app.use(session({
    secret :"sadsadsaf"
}));
app.get('/', function(req, res){
    sess = req.session;
    if(sess.email)
        abc(req,res);
    else
        res.render('index.html');
});
app.post('/login', function(req, res){
    sess = req.session;
   sess.uname = req.body.username;
    console.log(session.uname);
    lin.reg(req, res);
    abc(req, res);
});

function abc(req, res)
{
    sess = req.session;
    if(sess.uname)
        {
            res.write("sdfgdsgdfs");
            res.end('<a href = ' + '/logout'+'>Logout</a>');
        }
    else
        {
            res.write("LOgin first");
        }
}

app.get('/logout', function(req, res){
   req.session.destoy(function(err){
       if(err) throw err;
       res.redirect('/');
   }) ;
});
//app.post('/login', lin.reg);
app.post('/signup', sin.reg);
app.listen(3000);