// Set up MySQL connection.
var mysql = require("mysql");
/*
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bootcamp1!?",
  database: "cat_db"
}); */

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b79321238d836a",
  password: "ec3f31c5",
  database: "heroku_bce4ab3ec691b82"
});
/*
var connection = mysql.createConnection({
  host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "v6ye5b67icx6heyz",
  password: "z2xk0kyof0jbyozo",
  database: "xe9ojuct81nv06pd"
});*/
/*
if (Process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "v6ye5b67icx6heyz",
    password: "z2xk0kyof0jbyozo",
    database: "xe9ojuct81nv06pd"
  });
}
*/
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
