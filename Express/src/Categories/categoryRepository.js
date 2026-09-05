const prisma = require('../config/db');

const findAllCategories = async () => {
    return await prisma.category.findMany()
}

const findCategoryById = async (id) => {
    return await prisma.category.findUnique({
        where: { id },
    })
}

const createCategory = async (data) => {
    return await prisma.category.create({
        data,
    })
}

const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: { id },
    })
}

const updateCategory = async (id, data) => {
    return await prisma.category.update({
        where: { id },
        data,
    })
}


module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    deleteCategory,
    updateCategory
}