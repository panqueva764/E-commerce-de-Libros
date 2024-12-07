// src/controller/orderController.js
const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body); // Crear la orden con los datos del cuerpo
    res.status(201).json(order); // Responder con la orden creada
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders(); // Obtener todas las órdenes
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id); // Obtener una orden por ID
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status); // Actualizar estado de la orden
    res.status(200).json({ message: 'Order status updated', order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createOrder, getOrders, getOrder, updateOrderStatus };
