const categoryRepository = require ("./categoryRepository")

const getAllCategories = async () => {
    return await categoryRepository.findAllCategories();
};

const getCategoryById = async (id) => {
    const categoryId = parseInt(id);
    return await categoryRepository.findCategoryById(categoryId);
};

const createCategory = async (categoryData) => {
    const formattedData = {
        name: categoryData.name        
    }
    return await categoryRepository.createCategory(formattedData);
};

const removeCategory = async (id) => {
    const categoryId = parseInt(id);
    return await categoryRepository.deleteCategory(categoryId);
};

const updateCategory = async (id, categoryData, isPatch = false) => {
    const categoryId = parseInt(id)
    let formattedData = {};

    if (!isPatch) {
        formattedData = {
            name: categoryData.name
        }
    } else {
        formattedData = { ...categoryData };
    }
    return await categoryRepository.updateCategory(categoryId, formattedData)
}


module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    removeCategory,
    updateCategory
}