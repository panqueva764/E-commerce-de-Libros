let orders = [];
let nextId = 1;

class OrderRepository {
  create(data) {
    const order = { id: nextId++, ...data };
    orders.push(order);
    return order;
  }

  findAll() {
    return orders;
  }

  findById(id) {
    return orders.find(order => order.id === id);
  }
}

module.exports = new OrderRepository();
