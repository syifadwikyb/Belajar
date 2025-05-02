const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const postAllUsers = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUES (?, ?, ?)`;
    const values = [body.name, body.email, body.address];

    return dbPool.execute(SQLQuery, values);
}

const patchAllUsers = (body, idUser) => {
    const SQLQuery = `UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?`;
    const values = [body.name, body.email, body.address, idUser];

    return dbPool.execute(SQLQuery, values);
}

const deleteAllUsers = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    postAllUsers,
    patchAllUsers,
    deleteAllUsers,
};