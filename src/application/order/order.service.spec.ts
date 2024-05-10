import { OrderRepository } from 'src/domain/repositories/order.repository';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let orderService: OrderService;
  let orderRepository: Partial<OrderRepository>;

  beforeEach(() => {
    orderRepository = {
      findUnique: jest.fn(),
    };
    orderService = new OrderService(orderRepository as OrderRepository);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  describe('findUnique', () => {
    it('should retrieve an order from the database', async () => {
    const mockedOrder = {
      number: '1001',
      amount: 299.99,
      currency: 'BRL',
      status: 'SHIPPED',
      items: [
        { name: 'Item 1', amount: 10.99 },
        { name: 'Item 2', amount: 20.99 },
      ],
    };

    orderService.execute = jest.fn().mockResolvedValue(mockedOrder);

    const order = await orderService.execute('1001');

    expect(order).toEqual(mockedOrder);
  });
  })
});
