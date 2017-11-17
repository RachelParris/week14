const connection = require("./connection.js");

// orm is an object with all the methods needed to do things with the data
// selectAll()
// insertOne()
// updateOne()
const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export to models
module.exports = orm;
