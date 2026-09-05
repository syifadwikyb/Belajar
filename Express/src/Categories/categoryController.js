const categoryService = require("./categoryService");

const isValidId = (id) => !isNaN(parseInt(id));

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
    console.error("[ERROR]", error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
    console.error("[ERROR]", error.message);
  }
};

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res
      .status(505)
      .json({ error: "Field name is required to create category" });
    console.error("[ERROR]", error.message);
  }
  try {
    const category = await categoryService.createCategory(req.body);
    res
      .status(200)
      .json({ message: "Category created successfully", data: category });
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
    console.error("[ERROR]", error.message);
  }
};

const deleteCategory = async (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(500).json({ error: "Invalid category ID" });
    console.error("[ERROR]", error.message);
  }

  try {
    const deleteCategory = await categoryService.removeCategory(req.params.id);

    if (!deleteCategory) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(201)
      .json({ message: "Category deleted successfully", data: deleteCategory });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
    console.error("[ERROR]", error.message);
  }
};

const putCategory = async (req, res) => {
  try {
    if (!req.body.name) {
      return res
        .status(400)
        .json({ error: "Missisng required, please provide name" });
    }

    const updateCategory = await categoryService.updateCategory(
      req.params.id,
      req.body,
      false,
    );
    res
      .status(201)
      .json({ message: "category updated successfully", data: updateCategory });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
    console.error("[ERROR]", error.message);
  }
};

const patchCategory = async (req, res) => {
  try {
    const updateCategory = await categoryService.updateCategory(
      req.params.id,
      req.body,
      true,
    );
    res
      .status(201)
      .json({ message: "Category updated successfully", data: updateCategory });
  } catch (error) {
    res.status(400).json({ error: "Failed to update category" });
    console.error("[ERROR]", error.message);
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  putCategory,
  patchCategory,
};
