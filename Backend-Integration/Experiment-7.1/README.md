# 🛍️ Simple Product List App Experiment-7.1

A beginner-friendly full-stack project that demonstrates how to connect a **Node.js + Express** backend with a **React.js** frontend using **Axios** and **CORS**.

---

## 🚀 Project Overview

This project displays a list of sample products fetched from an Express backend API and rendered on a React frontend.  
It helps understand the basic **client-server communication** using REST APIs.

---

## 🧩 Tech Stack

**Frontend:** React.js, Axios  
**Backend:** Node.js, Express.js  
**Other Tools:** CORS, npm

---

## 🗂️ Folder Structure

```
project/
│
├── backend/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup (Express Server)

**File:** `server.js`

```js
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
```

### ▶️ Run Backend

```bash
cd backend
npm init -y
npm install express cors
node server.js
```

The backend runs on:  
👉 `http://localhost:5000/api/products`

---

## 💻 Frontend Setup (React App)

**File:** `App.js`

```js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Error fetching products!");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

### ▶️ Run Frontend

```bash
cd frontend
npm install axios
npm start
```

The frontend runs on:  
👉 `http://localhost:3000`

---

## 🎯 Learning Outcomes

By completing this project, you will learn:

1. How to create an **Express API** with sample JSON data.  
2. How to handle **CORS** to allow frontend-backend communication.  
3. How to fetch data from a backend API using **Axios** in React.  
4. How to use **useState** and **useEffect** hooks for data handling.  
5. How to render a list of items dynamically in React.  
6. How to run **concurrently** two servers (backend & frontend).

---

## 🧠 Bonus Tip: Run Both Servers Together

You can use `concurrently` to run both backend and frontend together:

```bash
npm install -g concurrently
concurrently "npm start --prefix frontend" "node backend/server.js"
```

---

## 📸 Output Preview

```
Product List
-------------
Laptop     - $1200
Mouse      - $25
Keyboard   - $45
```

---

## 🏁 Author

👨‍💻 Developed by **John (Arzaul Haque)**  
📚 B.Tech (AI & Data Science)

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify.
