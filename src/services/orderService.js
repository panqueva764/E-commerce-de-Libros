// src/services/orderervice.js
const orderRepository = require('../repositories/orderRepository');

class OrderService {
  async createOrder(data) {
    return orderRepository.create(data); // Crear una nueva orden
  }

  async getAllOrders() {
    return orderRepository.findAll(); // Obtener todas las órdenes
  }

  async getOrderById(id) {
    return orderRepository.findById(id); // Obtener una orden por ID
  }

  async updateOrderStatus(id, status) {
    return orderRepository.updateStatus(id, status); // Actualizar el estado de la orden
  }
}

module.exports = new OrderService();
