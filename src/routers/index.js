const router = require('express').Router();
const productRouter = require('./product.router');
const options = require('../swaggerOptions.js');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const specs = swaggerJsDoc(options);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs));
router.use('/products', productRouter);

module.exports = router;
