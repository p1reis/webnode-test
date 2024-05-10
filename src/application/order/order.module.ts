import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderRepository, OrderService],
})
export class OrderModule {}