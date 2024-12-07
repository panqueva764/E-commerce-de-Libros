// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Obtiene todas las órdenes
 *     description: Devuelve una lista de todas las órdenes en el sistema.
 *     responses:
 *       200:
 *         description: Lista de órdenes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   customerName:
 *                     type: string
 *                     example: "John Doe"
 *                   totalAmount:
 *                     type: number
 *                     example: 120.5
 */
router.get('/orders', orderController.getOrders);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crea una nueva orden
 *     description: Crea una nueva orden en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: "John Doe"
 *               totalAmount:
 *                 type: number
 *                 example: 120.5
 *     responses:
 *       201:
 *         description: Orden creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 customerName:
 *                   type: string
 *                   example: "John Doe"
 *                 totalAmount:
 *                   type: number
 *                   example: 120.5
 */
router.post('/orders', orderController.createOrder);

/**
 * @swagger
 * /api/orders/{id}/confirm:
 *   put:
 *     summary: Confirma una orden
 *     description: Cambia el estado de la orden a "confirmada" y notifica a los sistemas interesados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la orden a confirmar.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Orden confirmada y notificaciones enviadas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order confirmed"
 *                 order:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     customerName:
 *                       type: string
 *                       example: "John Doe"
 *                     totalAmount:
 *                       type: number
 *                       example: 120.5
 *                     status:
 *                       type: string
 *                       example: "confirmed"
 */
router.put('/orders/:id/confirm', orderController.confirmOrder);

module.exports = router;
