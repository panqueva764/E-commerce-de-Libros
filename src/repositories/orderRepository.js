// src/repositories/orderRepository.js
const { Order } = require('../models/order');

class OrderRepository {
  async create(data) {
    return Order.create(data); // Crear una nueva orden
  }

  async findAll() {
    return Order.findAll(); // Obtener todas las órdenes
  }

  async findById(id) {
    return Order.findByPk(id); // Obtener una orden por ID
  }

  async updateStatus(id, status) {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order.update({ status });
  }
}

module.exports = new OrderRepository();
