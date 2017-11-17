const orm = require('../config/orm.js');

const burger = {
  selectAll: (cb) => {
    // Pulls data from burgers table
    orm.selectAll('burgers', (response) => cb(response))
  },
  insertAll: (table, condition, cb) => {
    orm.insertAll('burgers', (response) => cb(response))
  },
  updateAll: (table, value, cb) => {
    orm.updateAll('burgers', value, cb);
  }
}

// Export to controller
module.exports = burger;
