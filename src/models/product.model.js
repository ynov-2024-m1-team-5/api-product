const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('Products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantityInStock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Product;