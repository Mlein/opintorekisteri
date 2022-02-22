const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (nimi,opettaja,laajuus) values(?,?,?)',
      [opintojakso.nimi, opintojakso.opettaja, opintojakso.laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set nimi=?,opettaja=?, laajuus=? where id_opintojakso=?',
      [opintojakso.nimi, opintojakso.opettaja, opintojakso.laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;