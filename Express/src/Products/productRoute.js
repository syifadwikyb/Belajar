const express = require("express");
const router = express.Router();
const productController = require("./productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.putProduct);
router.patch("/:id", productController.patchProduct);

module.exports = router;