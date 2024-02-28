const router = require('express').Router();
const productController = require('../controllers/product.controller');

/**
 * @openapi
  * /api/v1/products/init:
    *   post:
    *     description: Initialize the database with some products.
    *     tags: [Products]
    *     summary: Initialize the database with some products
    *     produces:
    *       - application/json

    *     responses:
    *       200:
    *         description: Database initialized
    *         schema:
    *           type: object
    *           properties:
    *             success:
    *               type: boolean
 */
router.post('/init', productController.initDB);

/**
 * @openapi
  * /api/v1/products/create:
    *   post:
    *     description: Create a product
    *     tags: [Products]
    *     summary: Create a product.
    *     produces:
    *       - application/json
    *     parameters:
    *       - $ref: '#/components/schemas/Product/properties/id'
    *       - $ref: '#/components/schemas/Product/properties/name'
    *       - $ref: '#/components/schemas/Product/properties/description'
    *       - $ref: '#/components/schemas/Product/properties/active'
    *       - $ref: '#/components/schemas/Product/properties/thumbnail'
    *       - $ref: '#/components/schemas/Product/properties/price'
    *       - $ref: '#/components/schemas/Product/properties/quantityInStock'
    *     responses:
    *       200:
    *         description: Product created
    *         schema:
    *           type: object
    *           $ref: '#/components/schemas/Product'
 */
router.post('/create', productController.createProduct);

/**
 * @openapi
 * /api/v1/products/all:
 *   get:
 *     summary: Get all products.
 *     tags: [Products]
 *     produces:
*       - application/json
 *     responses:
 *       200:
 *         description: List of all products.
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *                 type: boolean
 *             products:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */
router.get('/all', productController.getAllProducts);

/**
 * @openapi
 * /api/v1/products/all/active:
 *   get:
 *     summary: Get all active products.
 *     tags: [Products]
 *     produces:
*       - application/json
 *     responses:
 *       200:
 *         description: List of all active products.
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *                 type: boolean
 *             products:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */
router.get('/all/active', productController.getActiveProducts);

/**
 * @openapi
  * /api/v1/products/{id}:
    *   get:
    *     description: Get a product by ID
    *     tags: [Products]
    *     summary: Get a product by ID.
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: id
    *         in: path
    *         description: ID of the product
    *         required: true

    *     responses:
    *       200:
    *         description: Product found
    *         schema:
    *           type: object
    *           properties:
    *             success:
    *               type: boolean
    *             product:
    *               $ref: '#/components/schemas/Product'
 */
router.get('/{id}', productController.getProductById);

/**
 * @openapi
  * /api/v1/products/{id}:
    *   put:
    *     description: Update a product by ID
    *     tags: [Products]
    *     summary: Update a product by ID.
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: id
    *         in: path
    *         description: ID of the product
    *         required: true
    *       - name: product
    *         in: body
    *         description: The values to update the product
    *         required: true
    *         schema:
    *           type: object
    *           properties:
    *             name:
    *               - $ref: '#/components/schemas/Product/properties/name'
    *             description:
    *               - $ref: '#/components/schemas/Product/properties/description'
    *             active:
    *               - $ref: '#/components/schemas/Product/properties/active'
    *             thumbnail:
    *               - $ref: '#/components/schemas/Product/properties/thumbnail'
    *             price:
    *               - $ref: '#/components/schemas/Product/properties/price'
    *             quantityInStock:
    *               - $ref: '#/components/schemas/Product/properties/quantityInStock'
    *           
    *     responses:
    *       200:
    *         description: Product updated
    *         schema:
    *           type: object
    *           properties:
    *             success:
    *               type: boolean
    *             product:
    *               $ref: '#/components/schemas/Product'
 */
router.put('/{id}', productController.updateProduct);

/**
 * @openapi
  * /api/v1/products/{id}:
    *   delete:
    *     description: Delete a product by ID
    *     tags: [Products]
    *     summary: Delete a product by ID.
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: id
    *         in: path
    *         description: ID of the product
    *         required: true

    *     responses:
    *       200:
    *         description: Product found
    *         schema:
    *           type: object
    *           properties:
    *             success:
    *               type: boolean
 */
router.delete('/{id}', productController.deleteProduct);

module.exports = router;