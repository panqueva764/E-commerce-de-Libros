//src/models/order.js
class Order {
  constructor(id, customerName, totalAmount) {
    this.id = id;
    this.customerName = customerName;
    this.totalAmount = totalAmount;
    this.status = 'created'; // Estado inicial de la orden
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    if (typeof subscriber.update === 'function') {
      this.subscribers.push(subscriber);
    } else {
      console.warn('Subscriber does not implement update method');
    }
  }

  confirmOrder() {
    this.status = 'confirmed';
    console.log(`Order ${this.id} confirmed`);
    this.subscribers.forEach(subscriber => subscriber.update(this)); // Notificar a todos los suscriptores
  }
}

module.exports = Order;
