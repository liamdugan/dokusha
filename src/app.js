const express = require('express');
const app = express();
var profile = require('./routes/profile');
var bodyParser = require('body-parser');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', profile);

var port = process.env.PORT || 3001;

app.set('port', port);

module.exports = app;
