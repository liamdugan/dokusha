var mongo = require('./mongo');

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

  addProfile: function (profileData, callback) {
    var profile = new mongo.Profile(profileData);
    profile.save(function (error) {
      callback(error, profile);
    });
  }
};
