const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Import the model (cat.js) to use its database functions.
// const cat = require("../models/cat.js");

// Reference index.handlebars in the views folder
router.get('/', (request, response) => {
  burger.selectAll((data) => {
    console.log(data);
    response.render('index');
  });
})

// Export routes for server.js to use.
module.exports = router;
