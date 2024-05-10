import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly database: OrderRepository) { }

  async execute(number: string) {
    try {
      const order = await this.database.findUnique(number);

      if (!order) {
        return "Order not found";
      }

      const formattedItems = order.items.map((item) => ({
        name: item.name,
        amount: item.amount,
      }));

      return {
        orderNumber: order.number,
        amount: order.amount,
        currency: order.currency,
        status: order.status,
        items: formattedItems,
      };
    } catch (error) {
      return error;
    }
  }
}