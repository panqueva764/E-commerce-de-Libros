//src/controllers/orderController.js
const Order = require('../models/order');
const InventorySystem = require('../models/system/InventorySystem');
const BillingSystem = require('../models/system/BillingSystem');
const ShippingSystem = require('../models/system/ShippingSystem');

let orders = []; // Base de datos en memoria

exports.getOrders = (req, res) => {
  return res.json(orders); // Devuelve todas las órdenes con sus estados
};

// Crear una orden
exports.createOrder = (req, res) => {
  const { customerName, totalAmount } = req.body;
  const newOrder = new Order(orders.length + 1, customerName, totalAmount);
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

// Confirmar una orden
exports.confirmOrder = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: 'Order not found' });

  // Agregar suscriptsores (Sistemas de Inventario, Facturación y Envío)
  order.addSubscriber(new InventorySystem());
  order.addSubscriber(new BillingSystem());
  order.addSubscriber(new ShippingSystem());

  order.confirmOrder();
  res.status(200).json({
    message: 'Order confirmed',
    order: order,
  });
};
