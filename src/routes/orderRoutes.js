// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crear una nueva orden
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *               customerEmail:
 *                 type: string
 *               totalAmount:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Orden creada correctamente
 */
router.post('/orders', orderController.createOrder);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Obtener todas las órdenes
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Listado de todas las órdenes
 */
router.get('/orders', orderController.getOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Obtener una orden por ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la orden a consultar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la orden
 */
router.get('/orders/:id', orderController.getOrder);

/**
 * @swagger
 * /api/orders/{id}/status:
 *   put:
 *     summary: Actualizar el estado de una orden
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la orden a actualizar
 *         schema:
 *           type: integer
 *       - in: body
 *         name: status
 *         description: Nuevo estado de la orden
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *     responses:
 *       200:
 *         description: Estado de la orden actualizado correctamente
 */
router.put('/orders/:id/status', orderController.updateOrderStatus);

module.exports = router;
