const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const opiskelija={
  get: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    bcrypt.hash(opiskelija.password, saltRounds, function(err, hash) {
      return db.query('insert into opiskelija (enimi, snimi) values(?,?)',
      [opiskelija.enimi, opiskelija.snimi, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    bcrypt.hash(opiskelija.password, saltRounds, function(err, hash) {
      return db.query('update opiskelija set enimi=?, snimi=? where id_opiskelija=?',
      [opiskelija.enimi, opiskelija.snimi, hash, id], callback);
    });
  }

}
          
module.exports = opiskelija;