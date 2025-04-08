'use strict';

var response = require('./res');
var connection = require('./connection');
const { handleQueryResult } = require('./helpers');

exports.index = function (req, res) {
    response.oke("Aplikasi REST API berjalan", res)
};


// Menampilkan data semua mahasiswa
exports.semuaMahasiswa = function (req, res) {
    connection.query(
        'SELECT * FROM mahasiswa',
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;

            response.oke(result, res);
        });
};

// Menampilkan data mahasiswa berdasarkan id
exports.tampilid = function (req, res) {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',
        [id],
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;

            response.oke(result, res);
        });
};


// Menambahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    if (!nim || !nama || !jurusan) {
        return res.status(400).json({ status: 400, message: "Field tidak boleh kosong" });
    }

    connection.query(
        'INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;
            response.oke("Berhasil menambahkan data", res)
        }
    )
}

// Mengupdate data mahasiswa
exports.updateMahasiswa = function (req, res) {
    const id = req.body.id_mahasiswa;
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query(
        'UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa = ?',
        [nim, nama, jurusan, id],
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;
            response.oke("Berhasil mengupdate data mahasiswa", res);
        }
    );
};


// Menghapus data mahasiswa
exports.deleteMahasiswa = function (req, res) {
    const id = req.body.id_mahasiswa;

    connection.query(
        'DELETE FROM mahasiswa WHERE id_mahasiswa = ?',
        [id],
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;

            response.oke("Data berhasil dihapus", res)
        }
    )
}


// Menghapus sementara data mahasiswa
exports.softDeleteMahasiswa = function (req, res) {
    const id = req.body.id_mahasiswa;

    if (!id) {
        return res.status(400).json({ status: 400, message: "ID mahasiswa diperlukan" });
    }

    connection.query(
        'UPDATE mahasiswa SET deleted_at = NOW() WHERE id_mahasiswa = ? AND deleted_at IS NULL',
        [id],
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;
            response.oke("Berhasil melakukan soft delete", res);
        }
    );
};


// Menampilkan data mahasiswa yang dihapus sementara
exports.mahasiswaTerhapus = function (req, res) {
    connection.query(
        'SELECT * FROM mahasiswa WHERE deleted_at IS NOT NULL',
        function (error, result) {
            console.log("Hasil query mahasiswaTerhapus:", result); // debug

            if (!handleQueryResult(error, result, res)) return;

            response.oke(result, res);
        }
    );
};


exports.tampilGroupMatakuliah = function(req, res) {
    connection.query(
        'SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN mahasiswa ON krs.id_mahasiswa = mahasiswa.id_mahasiswa JOIN matakuliah ON krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id_mahasiswa;',
        function (error, result) {
            if (!handleQueryResult(error, result, res)) return;

            response.okenested(result, res)
        }
    )
}
