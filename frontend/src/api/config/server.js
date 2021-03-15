/* 
import express from 'express'
const port = 4000;
//BODY parse of requistion
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Import DB Connection
require("./database");

// Import API route
const routes = require('../routes/lista'); //importing route
routes(server);
server.use('/listas', routes)


server.listen(process.env.PORT || port, function () {
  console.log('Listening on ' + port);
});

module.exports = server */