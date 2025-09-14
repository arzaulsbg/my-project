import React from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import "../App.css";

const ProductList = () => {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="product-list-container">
      <Header title="Products List" />
      <div className="product-container">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
