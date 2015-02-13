var Hapi = require('hapi');
var Joi  = require('joi');

var server = new Hapi.Server('0.0.0.0', '8000');

server.start();
console.log('Server Started On localhost:8000');
