'use strict';
const authController = require('./middleware/auth')
const verification = require('./middleware/verification');

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/api/v1/login')
        .post(authController.login);

    app.route('/api/v1/register')
        .post(authController.register);

    app.route('/api/v1/rahasia')
        .get(verification(2), authController.halamanrahasia);

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.semuaMahasiswa)

    app.route('/mahasiswa/:id')
        .get(jsonku.tampilid)

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa)

    app.route('/ubah')
        .put(jsonku.updateMahasiswa)

    app.route('/hapus')
        .delete(jsonku.deleteMahasiswa)

    app.route('/mahasiswa/softdelete')
        .put(jsonku.softDeleteMahasiswa);

    app.route('/mahasiswa/terhapus')
        .get(jsonku.mahasiswaTerhapus);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilGroupMatakuliah);
}