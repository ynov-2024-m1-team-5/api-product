const Product = require("../models/product.model");
const products = require("../json/products.json");

// initDB function is used to initialize the database with the products

exports.initDB = (req, res) => {
  Product.bulkCreate(products, { validate: true })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(400).json(err));
};

// createProduct function is used to create a new product and return the created product
exports.createProduct = (req, res) => {
  const { product } = req.body;

  Product.create({
    name: product.name,
    description: product.description,
    active: product.active,
    thumbnail: product.thumbnail,
    price: product.price,
    quantityInStock: product.quantityInStock || 0,
  })
    .then((product) => res.json({ product, success: true }))
    .catch((err) => res.status(400).json(err));
};

// getAllProducts function is used to get all the products
exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => res.json({ success: true, products }))
    .catch((err) => res.status(400).json(err));
};

// getProductById function is used to get the product by id
exports.getProductById = (req, res) => {
  const { id } = req.params;
  Product.findByPk(id)
    .then((product) => res.json({ success: true, product }))
    .catch((err) => res.status(400).json(err));
};

// updateProduct function is used to update the product by id and return the updated product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  Product.update(
    {
      name: product.name,
      description: product.description,
      active: product.active,
      thumbnail: product.thumbnail,
      price: product.price,
      quantityInStock: product.quantityInStock,
    },
    { where: { id } }
  )
    .then((product) => res.json({ success: true }))
    .catch((err) => res.status(400).json(err));
};

// deleteProduct function is used to delete the product by id
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.destroy({ where: { id } })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(400).json(err));
};

// getActiveProducts function is used to get all the active products
exports.getActiveProducts = (req, res) => {
  Product.findAll({ where: { active: true } })
    .then((products) => res.json({ success: true, products }))
    .catch((err) => res.status(400).json(err));
};
