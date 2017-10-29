var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vids"
});

$('#insertButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  if(type=='movie'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO movie (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='series'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO series (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='standups'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO standups (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='songs'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO songs (name, fname) VALUES (uname, ifname)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='events'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO events (name, fname) VALUES (uname, ifname)";
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
  if(type=='movie'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM movie WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='series'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM series WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='standups'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM standups WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='songs'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM songs WHERE fname = ifname AND name = uname";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='events'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM events WHERE fname = ifname AND name = uname";
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
  if(type=='movie'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM movie WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='series'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM series WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='standups'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM standups WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='songs'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM songs WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }
  else if(type=='events'){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM events WHERE fname = ?";
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
