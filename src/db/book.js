// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// db/book.js - details functions for mongoose Book schema

var mongo = require('./mongo');
var mongoose = require('mongoose');

module.exports = {
  getAllBooks: function (callback) {
    mongo.Books.find({}, function (error, books) {
      callback(error, books);
    });
  }
};
