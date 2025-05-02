const usersModel = require('../models/users');

// READ
const readAllUsers = async (req, res) => {
    try {
        const [body] = await usersModel.getAllUsers();
        res.json({
            message: 'GET all users successfully.',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

// CREATE
const createNewUser = async (req, res) => {
    const {body} = req;
    console.log(body);

    try {
        await usersModel.postAllUsers(body);
        res.json({
            message: 'Create new users successfully.',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

// UPDATE
const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;

    try {
        await usersModel.patchAllUsers(body, idUser)
        console.log('idUser: ', idUser);
        res.json({
            message: 'Update users successfully.',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }

}

// DELETE
const deleteUser = async (req, res) => {
    const {idUser} = req.params;

    try {
        await usersModel.deleteAllUsers(idUser)
        res.json({
            message: 'User deleted successfully.',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }

}

module.exports = {
    readAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}