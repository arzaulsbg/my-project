const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 45 },
];

// API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
