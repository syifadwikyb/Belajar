const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./Products/productRoute");
const categoryRoutes = require("./Categories/categoryRoute")

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
