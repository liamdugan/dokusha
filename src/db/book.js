var mongo = require('./mongo');
var mongoose = require('mongoose');

module.exports = {
  getAllBooks: function (callback) {
    mongo.Books.find({}, function (error, books) {
      callback(error, books);
    });
  }
};
