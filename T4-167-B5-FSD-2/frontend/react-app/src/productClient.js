import { useState, useEffect } from "react";
import axios from "axios";

function ProductClient() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    Product_Name: "",
    Category: "",
    Price: "",
    M_year: "",
  });

  const apiUrl = "http://localhost:5000/products";

  const loadProducts = async (category = "") => {
    try {
      const url = category ? `${apiUrl}/${category}` : apiUrl;
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Product_Name, Category, Price, M_year } = formData;

    if (!Product_Name || !Category || !Price || !M_year) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(apiUrl, {
        Product_Name,
        Category,
        Price: Number(Price),
        M_year: Number(M_year),
      });
      alert("Product added!");
      setFormData({ Product_Name: "", Category: "", Price: "", M_year: "" });
      loadProducts();
    } catch (err) {
      alert("Error adding product");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="Product_Name"
          placeholder="Product Name"
          value={formData.Product_Name}
          onChange={handleChange}
          required
        />
        <select
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
        <input
          name="Price"
          type="number"
          placeholder="Price"
          value={formData.Price}
          onChange={handleChange}
          required
        />
        <input
          name="M_year"
          type="number"
          placeholder="Manufacture Year"
          value={formData.M_year}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Products</h2>
      <button onClick={() => loadProducts()}>Read All</button>
      <button onClick={() => loadProducts("mobile")}>Read Mobiles</button>
      <button onClick={() => loadProducts("laptop")}>Read Laptops</button>

      <ul>
        {products.length === 0 && <li>No products found.</li>}
        {products.map(({ _id, Product_Name, Category, Price, M_year }) => (
          <li key={_id}>
            {Product_Name} - {Category} - ${Price} - Manufactured: {M_year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductClient;
