// src/config/database.js
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/e-commerce-biblioteca.sqlite')
});

module.exports = sequelize;  // Exportación directa de la instancia sequelize
