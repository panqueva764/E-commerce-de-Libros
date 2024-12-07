// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes'); // Importar rutas de orden
const sequelize = require('./config/database');
const { swaggerSpec, swaggerUi } = require('./config/swagger'); // Importar Swagger

const app = express();
app.use(bodyParser.json());

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  // Ruta para acceder a Swagger UI

// Rutas de la API
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);

// Sincronización de la base de datos (forzar recreación en desarrollo)
sequelize.sync({ force: true }) // Forzar la recreación de las tablas
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger UI disponible en http://localhost:${PORT}/api-docs`);
});
