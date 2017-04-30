#!/usr/bin/env node

// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// bin/run-server.js - Starts the express server and seeds the mongo database

// Seed the database, then start the server
require('../db/seed.js')(function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log('Successfully seeded database');
    var app = require('../app');

    app.set('port', process.env.PORT || 3001);

    var server = app.listen(app.get('port'), function () {
      console.log('Express server listening on port %d', server.address().port);
    });
  }
});
