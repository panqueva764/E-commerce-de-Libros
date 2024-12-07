# E-commerce System (Con patrón Observer)

Este repositorio contiene un sistema de **E-commerce** implementado con el patrón **Observer**. El sistema notifica a diferentes subsistemas como **inventarios**, **facturación** y **envíos** cuando se confirma una orden. El proyecto incluye pruebas unitarias para validar las notificaciones y asegura que el sistema funciona de manera robusta.

## Descripción del Proyecto

Este proyecto implementa un sistema de comercio electrónico básico con la capacidad de realizar notificaciones automáticas a diferentes sistemas cuando una orden es confirmada. 

El patrón **Observer** se utiliza para permitir que los sistemas de **inventarios**, **facturación** y **envíos** reciban actualizaciones de manera eficiente, sin necesidad de acoplar fuertemente los sistemas entre sí.

## Requisitos

- Node.js
- Express.js
- MYSQL (o cualquier base de datos que elijas)
- Swagger (para la documentación de la API)
- Jest (para las pruebas unitarias)

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/panqueva764/ecommerce.git](https://github.com/panqueva764/E-commerce-de-Libros.git
   cd ecommerce
   npm install
   node src/app.js
   ```
1.1 **Para ejecutar los test**
   ```bash
   npm test
   ```

2. **Ya corriendo puedes revisar la documentación Swagger**

   ```Url
   http://localhost:3000/api-docs
   ```

3. **Patrón Observer**

  - El sistema sigue el patrón Observer, donde los subsistemas (como Inventarios, Facturación y Envíos) son los "observadores" que reaccionan a los cambios cuando una orden se confirma.
  - Los "subject" o sujetos son las órdenes, que notifican a los observadores (subsistemas) sobre su estado.
    
4. **Notificaciones**
 
Cada vez que se confirma una orden, el sistema notifica automáticamente a los observadores registrados (Inventarios, Facturación y Envíos).

4. **Colección de Apis**

El Access_key debes solicitarlo para poder descargar e importar y poder probar las apis en tu local

https://api.postman.com/collections/32474160-94925a7e-649c-4925-9304-7fa1bfaa2da0?access_key=***
