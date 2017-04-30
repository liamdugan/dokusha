var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dokusha', function (err) {
  if (err && err.message.includes('ECONNREFUSED')) {
    console.log('Error connecting to mongodb database: %s.\nIs "mongod" running?', err.message);
    process.exit(0);
  } else if (err) {
    throw err;
  } else {
    console.log('DB successfully connected. Adding seed data...');
  }
});

var db = mongoose.connection;

var profileSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  favs: { type: Array, required: true },
  read: { type: Array, required: true },
  vocab: { type: Array, required: true }
});

var bookSchema = mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true }
});

var Profiles = mongoose.model('Profiles', profileSchema);
var Books = mongoose.model('Books', bookSchema);

module.exports = {
  Profiles: Profiles,
  Books: Books,
  mongoose: mongoose,
};
