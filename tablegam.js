var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "game"
});

$('#insertButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  if(type=='action'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO action (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='adventure'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO adventure (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='sports'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO sports (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='stratergy'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO stratergy (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='simulation'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO simulation (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='others'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO others (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }

});
$('#deleteButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  if(type=='action'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM action WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='adventure'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM adventure WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='sports'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM sports WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='stratergy'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM stratergy WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='simulation'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM simulation WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='others'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM others WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }

});


$('#searchButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  if(type=='action'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM action WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='adventure'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM adventure WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='sports'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM sports WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='stratergy'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM stratergy WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='simulation'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM simulation WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='others'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM others WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }

});
