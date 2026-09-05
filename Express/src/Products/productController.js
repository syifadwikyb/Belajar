const productService = require("./productService");
const categoryService = require("../Categories/categoryService");
const { category } = require("../config/db");

const isValidId = (id) => !isNaN(parseInt(id));

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
    console.error("[ERROR]", error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
    console.error("[ERROR]", error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    if (req.body.categoryId) {
      const exitingCategory = await categoryService.getCategoryById(
        req.body.categoryId,
      );
      if (!exitingCategory) {
        return res.status(404).json({ error: "Category not found" });
        console.error("[ERROR]", error.message);
      }
    }

    const product = await productService.createNewProduct(req.body);
    res
      .status(201)
      .json({ message: "Product created successfully", data: product });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
    console.error("[ERROR]", error.message);
  }
};

const deleteProduct = async (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  try {
    const deletedProduct = await productService.removeProduct(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully", data: deletedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
    console.error("[ERROR]", error.message);
  }
};

const putProduct = async (req, res) => {
  try {
    if (!req.body.name || !req.body.price || !req.body.description) {
      return res.status(400).json({
        error:
          "Missing required fields. Please provide name, price, and description.",
      });
    }

    if (req.body.categoryId) {
      const exitingCategory = await categoryService.getCategoryById(
        req.body.categoryId,
      );
      if (!exitingCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
    }

    const updatedProduct = await productService.updateProductData(
      req.params.id,
      req.body,
      false,
    );
    res.json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
    console.error("[ERROR]", error.message);
  }
};

const patchProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProductData(
      req.params.id,
      req.body,
      true,
    );
    res.json({ 
      message: "Product updated successfully", 
      data: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
    console.error("[ERROR]", error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
};
