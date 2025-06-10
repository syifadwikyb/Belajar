const dbPool = require("../config/database");

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
}

const createUsers = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUES (?, ?, ?)`;
    const values = [body.name, body.email, body.address];
    return dbPool.execute(SQLQuery, values);
}


const updateUsers = (body, idUser) => {
    const SQLQuery = `UPDATE users SET name = ?, email = ?, address = ? WHERE id_user = ?`;
    const values = [
        body.name ?? null,
        body.email ?? null,
        body.address ?? null,
        idUser
    ];
    return dbPool.execute(SQLQuery, values);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id_user = ?`;
    const values = [idUser];
    return dbPool.execute(SQLQuery, values);
}


module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUser
}