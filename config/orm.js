const connection = require("./connection.js");

// orm is an object with all the methods needed to do things with the data
const orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, condition, cb) {
    const queryString = "UPDATE " + tableInput + "SET devoured=true WHERE id=" + condition + ";";

    (err, result) => {
      if (err) throw err;
      cb(result);
    }
  },
  updateOne: function(tableInput, value, cb) {
    const queryString = "INSERT INTO " + tableInput + "(burger_name) VALUES (" + value + ");";

    (err, result) => {
      if (err) throw err;
      cb(result);
    }
  }
};

// Export to models
module.exports = orm;
