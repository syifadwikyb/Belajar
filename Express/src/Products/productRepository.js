const prisma = require("../config/db");

const findAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  });
};

const findProductById = async (id) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
};

const createProduct = async (data) => {
  return await prisma.product.create({
    data,
    include: {
      category: true,
    },
  });
};

const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: { id },
  });
};

const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: { id },
    data,
    include: {
      category: true,
    },
  });
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
