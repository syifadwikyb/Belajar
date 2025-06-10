const userModel = require("../models/users");

// READ - GET
const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers()
        res.json({
            message: "GET all users",
            data: data
        })
    } catch (e) {
        res.status(500).json({
            message: "Server error",
            messageerror: e
        })
    }
}


// CREATE - POST
const createUsers = async (req, res) => {
    const body = req.body;
    try {
        await userModel.createUsers(body);
        res.status(201).json({
            message: "Create users success",
            data: body
        })
    } catch (e) {
        console.error('Error creating user:', e);
        res.status(500).json({
            message: "Server error",
            messageerror: "Something went wrong on the server while creating user."
        })
    }
}

// UPDATE - PATCH
const updateUsers = async (req, res) => {
    const {idUsers} = req.params;
    const body = req.body;
    try {
        await userModel.updateUsers(body, idUsers);
        res.status(200).json({
            message: "Update users success",
            data: {
                id_user: idUsers,
                ...body
            }
        })

    } catch (e) {
        console.error('Error updating user:', e);
        res.status(500).json({
            message: "Server error",
            messageerror: "Something went wrong on the server while updating user."
        })
    }
}


// DELETE - DELETE
const deleteUsers = async (req, res) => {
    const {idUsers} = req.params;

    if (!idUsers || isNaN(idUsers)) {
        return res.status(400).json({
            message: "Invalid user ID"
        });
    }

    try {
        const result = await userModel.deleteUser(idUsers);

        if (result[0].affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Delete users success",
            data: {
                id_user: idUsers
            }
        })

    } catch (e) {
        console.error('Error delete user:', e);
        res.status(500).json({
            message: "Server error",
            messageerror: "Something went wrong on the server while delete user."
        })
    }
}


module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}