const mongoose = require("mongoose");

// Define product schema with new fields
const productSchema = new mongoose.Schema({
  Product_Name: { type: String, required: true },
  Category: { type: String, required: true, enum: ["mobile", "laptop"] },
  Price: { type: Number, required: true },
  M_year: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

async function addProduct(product) {
  const newProduct = new Product(product);
  return await newProduct.save();
}

async function getAllProducts() {
  return await Product.find();
}

async function getProductsByCategory(category) {
  return await Product.find({ Category: category });
}

module.exports = {
  addProduct,
  getAllProducts,
  getProductsByCategory,
};
