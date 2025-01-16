# E-Commerce-DM
Description


E-Commerce-Data Manager provides a functional Express.js API that connects to a PostgreSQL database using Sequelize. The API allows you to interact with a database through RESTful endpoints for managing categories, products, and tags. You can test API routes (GET, POST, PUT, DELETE) using Insomnia or any other API client.

Features

Database Connection: The app connects to PostgreSQL using Sequelize for ORM-based interaction.
Environment Variables: Database credentials are configured through an environment variable file (.env).
Schema & Seed: You can initialize the database schema and seed it with test data.
CRUD Operations: The API supports POST, PUT, DELETE, and GET routes to manage and interact with categories, products, and tags in the database.
Formatted JSON Responses: All data responses are returned in a clean, formatted JSON structure.
Requirements
Node.js
PostgreSQL
Insomnia (or any other API client)

API Endpoints

Categories

GET /categories: Retrieve a list of all categories.
POST /categories: Create a new category.
PUT /categories/:id: Update an existing category.
DELETE /categories/:id: Delete a category.

Products

GET /products: Retrieve a list of all products.
POST /products: Add a new product.
PUT /products/:id: Update product details.
DELETE /products/:id: Delete a product.

Tags

GET /tags: Retrieve a list of all tags.
POST /tags: Create a new tag.
PUT /tags/:id: Update an existing tag.
DELETE /tags/:id: Delete a tag.

For POST, PUT, and DELETE requests, responses will confirm the status of the operation, e.g., success messages.

Links:

https://github.com/tinaara07/E-Commerce-DM
 walk through video:
 
 https://drive.google.com/file/d/1vDVsJ71o6q-TNDFMiDeSiBbNQRuZBvEc/view

![Untitled Video December 2, 2024 10_15 PM (1)](https://github.com/user-attachments/assets/db9ae51c-3996-47bc-aa4c-4e42b3975136)



![Untitled Video December 2, 2024 10_17 PM (1)](https://github.com/user-attachments/assets/26edfe92-1cf8-401e-8548-2f8265bc9e6c)



