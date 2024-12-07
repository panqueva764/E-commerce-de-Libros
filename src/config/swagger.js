// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Commerce API',
      version: '1.0.0',
      description: 'API para gestionar libros y órdenes',
    },
  },
  apis: ['./src/routes/*.js'],  // Define la ruta donde Swagger buscará las definiciones de rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerSpec, swaggerUi };
