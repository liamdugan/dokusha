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

var Profiles = mongoose.model('Profiles', profileSchema);

module.exports = {
  Profiles: Profiles,
  mongoose: mongoose,
  db: db.collection('Profiles').createIndex( { "__v": 1 }, { unique: true } )
};
