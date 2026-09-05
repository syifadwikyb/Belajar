const express = require ("express");
const router = express.Router();
const categoryController = require ("./categoryController")

router.get("/", categoryController.getCategories)
router.get("/:id", categoryController.getCategory)
router.post("/", categoryController.createCategory)
router.delete("/:id", categoryController.deleteCategory)
router.put("/:id", categoryController.putCategory)
router.patch("/:id", categoryController.patchCategory)

module.exports = router