const products = [
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Novel", category: "Books" },
  { name: "Cookbook", category: "Books" }
];

const categorySelect = document.getElementById('category');
const productList = document.getElementById('product-list');

// Function to display products
function displayProducts(filter) {
  productList.innerHTML = ''; // clear old items
  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  if (filteredProducts.length === 0) {
    productList.innerHTML = '<p>No products found</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.textContent = product.name;
    productList.appendChild(div);
  });
}

// Initial load
displayProducts('All');

// Event listener for dropdown
categorySelect.addEventListener('change', (e) => {
  displayProducts(e.target.value);
});
