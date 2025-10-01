# Experiment 15 – E-commerce Catalog with Nested Variants and MVC

A beginner-friendly MongoDB + Express experiment implementing a persistent e-commerce catalog with nested variants (color, size, stock) and a simple MVC structure.


## Objective

- Practice CRUD operations on a persistent MongoDB collection.
- Work with nested subdocuments (variants inside products).
- Implement REST API using Express + Mongoose.
- Maintain MVC separation: models / controllers / routes.

---

## Folder Structure

```
Experiment-15/
├── controllers/
│   └── productController.js    # Product logic (CRUD + filters + variant operations)
├── models/
│   └── Product.js              # Mongoose schema for Product + Variant
├── routes/
│   └── productRoutes.js        # Express routes
├── server.js                   # App bootstrap + MongoDB connection
├── package.json                # Dependencies & scripts
└── README.md                   # This documentation
```

---

## Data Model

### Product
```json
{
  "_id": "ObjectId",
  "name": "String",       // required
  "price": "Number",      // required
  "category": "String",
  "variants": [
    { "_id": "ObjectId", "color": "String", "size": "String", "stock": "Number" }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Example Variant
```json
{ "color": "Red", "size": "M", "stock": 10 }
```

---

## Endpoints (Base URL: \`http://localhost:3000/products\`)

| Method | Path                               | Purpose                                           |
|--------|------------------------------------|--------------------------------------------------|
| POST   | \`/seed\`                            | Insert sample products (idempotent)             |
| GET    | \`/\`                                | Root message / instructions                      |
| GET    | \`/\`                                | List all products                                |
| GET    | \`/:id\`                             | Get product by ID                                |
| GET    | \`/category/:category\`              | Filter products by category                      |
| GET    | \`/by-color/:color\`                 | Filter products by variant color                |
| POST   | \`/\`                                | Create a new product (optionally with variants) |
| PUT    | \`/:id\`                             | Update product and replace variants array       |
| DELETE | \`/:id\`                             | Delete a product                                 |
| POST   | \`/:id/variants\`                    | Add a new variant to a product                  |
| PUT    | \`/:id/variants/:variantId/stock\`  | Update stock of a specific variant              |

---

## Sample Requests

### Seed Sample Products
```bash
curl -X POST http://localhost:3000/products/seed
```

### Create a Product with Variants
```http
POST /products
Content-Type: application/json

{
  "name": "Gaming Laptop",
  "price": 1499,
  "category": "Electronics",
  "variants": [
    { "color": "Black", "size": "15-inch", "stock": 4 },
    { "color": "Silver", "size": "17-inch", "stock": 2 }
  ]
}
```

### Add a Variant
```http
POST /products/<productId>/variants
Content-Type: application/json

{
  "color": "Red",
  "size": "15-inch",
  "stock": 5
}
```

### Update Variant Stock
```http
PUT /products/<productId>/variants/<variantId>/stock
Content-Type: application/json

{ "stock": 12 }
```

### Filter Products by Color
```http
GET /products/by-color/Blue
```

---

## Setup and Run

### Install dependencies
```bash
npm install
```

### Start MongoDB locally
Ensure MongoDB is running on the default port (27017).

### Run server
```bash
npm start
# or
node server.js
```

Open browser: [http://localhost:3000](http://localhost:3000)

---

## Learning Outcomes

- Implement persistent CRUD with Mongoose.
- Use nested documents for product variants.
- Query nested array fields (\`variants.color\`).
- Update subdocument properties by \`_id\`.
- Maintain MVC separation for clarity.

---

## Next Steps

- Add authentication & authorization.
- Implement pagination & sorting.
- Enhance variant filtering (e.g., multiple colors/sizes).
- Integrate with frontend (React/Vue/Angular).
