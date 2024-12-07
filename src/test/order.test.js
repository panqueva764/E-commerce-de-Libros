const Order = require('../models/order');
const InventorySystem = require('../models/system/InventorySystem');
const BillingSystem = require('../models/system/BillingSystem');
const ShippingSystem = require('../models/system/ShippingSystem');

jest.mock('../models/system/InventorySystem');
jest.mock('../models/system/BillingSystem');
jest.mock('../models/system/ShippingSystem');

describe('Order - Observer Pattern', () => {
  let order;

  beforeEach(() => {
    order = new Order(1, 'John Doe', 120.5);

    // Limpiar los mocks
    InventorySystem.mockClear();
    BillingSystem.mockClear();
    ShippingSystem.mockClear();

    // Agregar suscriptores
    order.addSubscriber(new InventorySystem());
    order.addSubscriber(new BillingSystem());
    order.addSubscriber(new ShippingSystem());
  });

  it('should notify all systems when the order is confirmed', () => {
    order.confirmOrder();

    // Verificar que cada sistema fue notificado
    expect(InventorySystem.mock.instances[0].update).toHaveBeenCalledWith(order);
    expect(BillingSystem.mock.instances[0].update).toHaveBeenCalledWith(order);
    expect(ShippingSystem.mock.instances[0].update).toHaveBeenCalledWith(order);
  });
});
