const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
// const cat = require("../models/cat.js");

// Reference index.handlebars in the views folder
router.get('/', (request, response) => response.render('index'));

// Export routes for server.js to use.
module.exports = router;
