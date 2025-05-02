const dbPool = require('../config/database');

const createUser = async (name, email, password) => {
    const SQLQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    return dbPool.execute(SQLQuery, [name, email, password]);
}

const findUserByEmail = async (email) => {
    const SQLQuery = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await dbPool.execute(SQLQuery, [email]);
    return rows[0]; // Ambil user pertama
}

module.exports = { createUser, findUserByEmail };
