// src/systems/InventorySystem.js
class InventorySystem {
  update(order) {
    console.log(`Descontando productos del inventario para la orden: ${order.id}`);
    
    // Simulación del consumo de un API interna (por ejemplo, un webhook)
    // Aquí simularíamos un `fetch` o una llamada HTTP a una API externa que actualiza el inventario
    /*
    fetch('https://api.inventarios.example.com/descontar/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: order.id,
        products: order.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Inventario actualizado:', data);
    })
    .catch(error => {
      console.error('Error al actualizar inventario:', error);
    });
    */
    
    console.log('Simulación: Inventario descontado');
  }
}

module.exports = InventorySystem;
