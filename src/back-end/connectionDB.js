let mysql = require('mysql');

let con = mysql.createConnection({
  host: "??? ver em casa",
  user: "root",
  password: "etecPoa#2026"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});