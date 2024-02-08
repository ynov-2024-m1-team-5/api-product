const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/init', productController.initDB);
router.post('/create', productController.createProduct);
router.get('/all', productController.getAllProducts);
router.get('/all/active', productController.getActiveProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;