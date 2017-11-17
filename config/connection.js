const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "localhost",
	user: "",
	password: "",
	database: "burgers_db"
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Exports to orm.js
module.exports = connection;
