var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pics"
});

$('#insertButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  if(type=='hostel'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO hostel (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='campus'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO campus (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='effervescence'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO effervescence (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='aparoksha'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO aparoksha (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='asmita'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO asmita (name, fname) VALUES (uname, ifname)";
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
  if(type=='hostel'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM hostel WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='campus'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM campus WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='effervescence'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM effervescence WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='aparoksha'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM aparoksha WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='asmita'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM asmita WHERE fname = ifname AND name = uname";
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
  if(type=='hostel'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM hostel WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='campus'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM campus WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='effervescence'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM effervescence WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='aparoksha'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM aparoksha WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='asmita'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM asmita WHERE fname = ?";
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
