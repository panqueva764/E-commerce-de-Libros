// src/models/index.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './e-commerce-biblioteca.sqlite', // Base de datos en disco
});

module.exports = sequelize;
