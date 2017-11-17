const orm = require('../config/orm.js');

const burger = {
  selectAll: (cb) => {
    // Pulls data from burgers table
    orm.selectAll('burgers', (response) => cb(response))
  }
}

// Export to controller
module.exports = burger;
