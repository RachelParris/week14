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

router.put("/burger/:id", (request, response) => {
  const condition = "id= " + req.params.id;
  burger.updateOne(req.body.burger, condition, () => response.redirect("/"));
});

router.post("/burger/create", (request, response) => {
  burger.insertOne(req.body.burger, value, () => response.redirect("/"));
});


// Export routes for server.js to use.
module.exports = router;
