const Order = require('../models/order');
const orderRepository = require('../repositories/orderRepository');
const BillingSystem = require('../models/system/BillingSystem');
const InventorySystem = require('../models/system/InventorySystem');
const ShippingSystem = require('../models/system/ShippingSystem');

class OrderService {
  createOrder(data) {
    return orderRepository.create(data);
  }

  confirmOrder(id) {
    const orderData = orderRepository.findById(Number(id));
    if (!orderData) throw new Error('Order not found');
    const order = new Order(orderData.id, orderData);

    // Agregar sistemas suscriptores
    order.addSubscriber(new BillingSystem());
    order.addSubscriber(new InventorySystem());
    order.addSubscriber(new ShippingSystem());

    order.confirmOrder();
    return order;
  }

  getAllOrders() {
    return orderRepository.findAll();
  }
}

module.exports = new OrderService();
