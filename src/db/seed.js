// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// db/seed.js - seeds database with profiles and books

var seeder = require('seeder');
var mongo = require('./mongo');
var seedData = require('./seedData.json');

var seedDb = function (done) {
  seeder(seedData, mongo.mongoose, function (err) {
    if (err) {
      console.log(err);
      done(err);
    } else {
      done(null);
    }
  });
};

if (require.main === module) {
  // run directly from cmd line
  seedDb(function () {
    console.log('Your database has been seeded.');
    process.exit();
  });
} else {
  module.exports = seedDb;
}
