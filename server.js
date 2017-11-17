const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const handleBars = require('express-handlebars');
// const mysql = require('mysql');
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/routes.js');
app.use('/', routes);

app.get('/', (request, response) => response.render('index'));

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server is listening to port: ${PORT}`));
// var orm = require("./config/orm.js");
//
// // Call orm method, passing in the anonymous function (with "res") as the callback.
// orm.selectWhere("burgers", "burger_name", "devoured", (result) => {
//   var data = result;
//   console.log(data);
// });
