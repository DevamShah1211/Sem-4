// const expr = require("express");
// const mg = require("mongoose");
// const cors = require("cors");
// const app = expr();
// app.use(cors());
// app.use(expr.json());
// mg.connect("mongodb://localhost:27017/B5_167")
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// const myschema = new mg.Schema({ username: String });
// const data = new mg.model("user", myschema);
// app.post("/signup", async (req, res) => {
//   try {
//     const newuser = new data({ username: req.body.username });
//     await newuser.save();
//     res.send();
//   } catch (err) {
//     res.send(err);
//   }
// });
// app.listen(5000);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (make sure MongoDB is running locally)
mongoose
  .connect("mongodb://localhost:27017/B5_167")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define product schema & model, now with M_year included
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ["mobile", "laptop"] },
  price: { type: Number, required: true, min: 0 },
  M_year: {
    type: Number,
    required: true,
    min: 2000, // example min year
    max: new Date().getFullYear(), // max current year
  },
});

const Product = mongoose.model("Product", productSchema);

// POST to add product
app.post("/products", async (req, res) => {
  try {
    let { name, category, price, M_year } = req.body;

    // Basic presence check
    if (!name || !category || !price || !M_year) {
      return res
        .status(400)
        .json({ message: "Please provide name, category, price and M_year." });
    }

    // Lowercase category for consistency
    category = category.toLowerCase();

    if (!["mobile", "laptop"].includes(category)) {
      return res
        .status(400)
        .json({ message: "Category must be mobile or laptop" });
    }

    price = Number(price);
    M_year = Number(M_year);

    if (isNaN(price) || price < 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }

    const currentYear = new Date().getFullYear();
    if (isNaN(M_year) || M_year < 2000 || M_year > currentYear) {
      return res
        .status(400)
        .json({ message: `M_year must be between 2000 and ${currentYear}` });
    }

    const product = new Product({ name, category, price, M_year });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET products by category (mobile/laptop)
app.get("/products/:category", async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();
    if (!["mobile", "laptop"].includes(category)) {
      return res
        .status(400)
        .json({ message: "Category must be mobile or laptop" });
    }
    const filteredProducts = await Product.find({ category });
    res.json(filteredProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
