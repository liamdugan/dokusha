var express = require('express');
var router = express.Router();
var profilesDb = require('../db/profiles');

router.get('/all', function (req, res, next) {
  profilesDb.getAllProfiles(function (err, reviews) {
    if (err) {
      next(err);
    } else {
      res.send(reviews);
    }
  });
});

router.get('/verify', function (req, res, next) {
  var name = req.query.name;
  console.log(req.query);
  profilesDb.getProfileByName(name, function (err, profiles) {
    if (err) {
      res.send(new Promise({}));
    } else {
      res.send(profiles);
    }
  });
});

router.post('/new', function (req, res, next) {
  var newProf = {
    name: req.query.name,
    password: req.query.password,
    read: [],
    favs: [],
    vocab: []
  };
  profilesDb.addProfile(newProf, function (err, profile) {
    if (!err) {
      res.send(newProf);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
