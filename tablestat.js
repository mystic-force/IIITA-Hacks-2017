var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stat"
});

$('#insertButton').click(function() {
  var type = $('#inputType').val();
  var ifname = $('#inputName').val();
  var uname = ;
  {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO stat (name, fname) VALUES (uname, ifname)";
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
  {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM stat WHERE fname = ifname AND name = uname";
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
  {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM stat WHERE fname = ?";
      con.query(sql, [ifname], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      con.end();
    });
  }

});
