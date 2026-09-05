const { parse } = require("dotenv");
const productRepository = require("./productRepository");

const getAllProducts = async () => {
  return await productRepository.findAllProducts();
};

const getProductById = async (id) => {
  const productId = parseInt(id);
  return await productRepository.findProductById(productId);
};

const createNewProduct = async (productData) => {
  const formattedData = {
    name: productData.name,
    price: parseFloat(productData.price) || 0,
    description: productData.description,
  };
  return await productRepository.createProduct(formattedData);
};

const removeProduct = async (id) => {
  const productId = parseInt(id);
  return await productRepository.deleteProduct(productId);
};

const updateProductData = async (id, productData, isPatch = false) => {  
  const productId = parseInt(id)
  let formattedData = {};

  if (formattedData.price !== undefined) {
    formattedData.price = parseFloat(productData.price);
  }

  if (isPatch) {
    formattedData = {...productData}
    if (formattedData.price !== undefined) {
      formattedData.price = parseFloat(formattedData.price)
    }
    if (formattedData.categoryId !== undefined) {
      formattedData.categoryId = parseInt(formattedData.categoryId)
    }
  } else {
    formattedData = {
      name: productData.name,
      price: parseFloat(productData.price),
      description: productData.description,
      categoryId: productData.categoryId ? parseInt(productData.categoryId) : null
    };
  }

  return await productRepository.updateProduct(productId, formattedData);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  removeProduct,
  updateProductData,
};