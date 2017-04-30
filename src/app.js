// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// app.js - set up of the express API server

const express = require('express');
const app = express();
var api = require('./routes/api');
var bodyParser = require('body-parser');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

var port = process.env.PORT || 3001;

app.set('port', port);

module.exports = app;
