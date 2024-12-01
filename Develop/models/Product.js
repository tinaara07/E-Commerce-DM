// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // we need id,name,stock,price 
    id: {
      // Integer type
      type: DataTypes.INTEGER,
      // Not null
      allowNull: false,
      // Primary key
      primaryKey: true,
      // Auto increment
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // 'category' refers to the table name
        key: 'id', // 'id' refers to the column name in the category table
      },
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
