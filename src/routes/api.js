// Dokusha - Liam Dugan - CIS197 Final Project - 4/30/2017
// api.js - sets up the api routes for requesting profiles and books

var express = require('express');
var router = express.Router();
var profilesDb = require('../db/profiles');
var booksDb = require('../db/book');

router.get('/all', function (req, res, next) {
  booksDb.getAllBooks(function (err, books) {
    if (err) {
      next(err);
    } else {
      res.send(books);
    }
  });
});

router.get('/verify', function (req, res, next) {
  profilesDb.getProfileByName(req.query.name, function (err, profiles) {
    if (err) {
      res.send(new Promise({}));
    } else {
      res.send(profiles);
    }
  });
});

router.get('/update', function (req, res, next) {
  profilesDb.updateProfile(req.query, function (err, result) {
    if (err) {
      res.status(400).send('Error');
    } else {
      res.send('Updated ' + result.nModified + ' item');
    }
  });
});

router.get('/new', function (req, res, next) {
  profilesDb.addProfile(req.query.name,
    req.query.password, function (err, profile) {
    if (err) {
      res.status(409).send('Account Already exists');
    } else {
      res.send(profile);
    }
  });
});

module.exports = router;
