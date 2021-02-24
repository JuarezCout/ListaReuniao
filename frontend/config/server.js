const port = 4000;
//BODY parse of requistion
const bodyParser = require('body-parser');
const express = require('express');

// Import DB Connection
require("./database");

const server = express();

// Import API route
var routes = require('../routes/lista'); //importing route
routes(server);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, function () {
  console.log('Listening on');
});

module.exports = server