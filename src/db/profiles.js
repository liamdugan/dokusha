var mongo = require('./mongo');
var mongoose = require('mongoose');

module.exports = {
  getAllProfiles: function (callback) {
    mongo.Profiles.find(function (error, profiles) {
      callback(error, profiles);
    });
  },

  getProfileByName: function (username, callback) {
    mongo.Profiles.findOne({"name": username}).exec(function (error, profiles) {
      if (profiles == null) {
        callback(error, {});
      } else {
        callback(error, profiles);
      }
    });
  },

  updateProfile: function (profile, callback) {
    const newInfo = {favs: profile.favs, read: profile.read, vocab: profile.vocab};
    mongo.Profiles.update({name: profile.name}, newInfo,
      {upsert: "true"}).exec(function (error, profiles) {
      callback(error, profiles);
    });
  },

  addProfile: function (name, password, callback) {
    var newProf = {
      _id: mongoose.Types.ObjectId(),
      name: name,
      password: password,
      vocab: [''],
      favs: [''],
      read: ['']
    };
    var profile = new mongo.Profiles(newProf);
    console.log(profile);
    profile.save(function (error, profiles) {
      callback(error, profile);
    });
  }
};
