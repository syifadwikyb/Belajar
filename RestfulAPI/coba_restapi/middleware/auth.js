const connection = require('../connection')
const mysql = require('mysql')
const response = require('../res')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const ip = require('ip')
const config = require('../config/secret')

exports.register = function (req, res) {
    const { username, email, password, role, tanggal_daftar } = req.body;

    if (!username || !email || !password || !role || !tanggal_daftar) {
        return res.status(400).json({
            success: false,
            message: "Semua field harus diisi"
        });
    }

    const post = {
        username,
        email,
        password: md5(password),
        role,
        tanggal_daftar
    };

    const query = "SELECT email FROM ?? WHERE ?? = ?";
    const table = ["users", "email", email];
    const formattedQuery = mysql.format(query, table);

    connection.query(formattedQuery, function (error, rows) {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Terjadi kesalahan saat cek email" });
        }

        if (rows.length === 0) {
            const insertQuery = "INSERT INTO ?? SET ?";
            const insertTable = ["users", post];
            const finalQuery = mysql.format(insertQuery, insertTable);

            connection.query(finalQuery, function (error, result) {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ success: false, message: "Gagal menyimpan user" });
                }

                return res.json({
                    success: true,
                    message: "Berhasil menambahkan user"
                });
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Email sudah terdaftar"
            });
        }
    });
}

exports.login = function (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email dan password harus diisi"
        });
    }

    const query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    const table = ["users", "email", email, "password", md5(password)];
    const formattedQuery = mysql.format(query, table);

    connection.query(formattedQuery, function (error, rows) {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Terjadi kesalahan saat login" });
        }

        if (rows.length === 1) {
            const token = jwt.sign(
                { id: rows[0].id_users, role: rows[0].role },
                config.secret,
                { expiresIn: 1440 }
            );

            const data = {
                id_user: rows[0].id_users,
                access_token: token,
                ip_address: ip.address()
            };

            const queryToken = "INSERT INTO ?? SET ?";
            const tableToken = ["akses_token", data];
            const formattedTokenQuery = mysql.format(queryToken, tableToken);

            connection.query(formattedTokenQuery, function (error) {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ success: false, message: "Gagal menyimpan token" });
                }

                return res.json({
                    success: true,
                    message: "Berhasil login",
                    token: token,
                    currUser: data.id_user
                });
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Email atau password salah"
            });
        }
    });
}

exports.halamanrahasia = function (req, res) {
    response.oke("Halaman ini hanya untuk user dengan role = 2!", res);
}
