// src/systems/BillingSystem.js
class BillingSystem {
  update(order) {
    console.log(`Generando factura para la orden: ${order.id}`);

    // Simulación del consumo de un API para generar la factura
    /*
    fetch('https://api.facturacion.example.com/generar/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: order.id,
        customerName: order.customerName,
        totalAmount: order.totalAmount,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Factura generada:', data);
    })
    .catch(error => {
      console.error('Error al generar factura:', error);
    });
    */
    
    console.log('Simulación: Factura generada');
  }
}

module.exports = BillingSystem;
