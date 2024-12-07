// src/models/order.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la conexión esté bien

const Order = sequelize.define('Order', {
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending', // Puede ser 'pending', 'completed', 'canceled', etc.
    allowNull: false
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = { Order };
