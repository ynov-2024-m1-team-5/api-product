const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.createProduct);
router.get('/all', productController.getAllProducts);
router.get('/all/active', productController.getActiveProducts);
router.get('/:id', productController.getProductById);
router.put('/:id/update', productController.updateProduct);
router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;