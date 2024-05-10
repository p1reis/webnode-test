import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/connection/prisma.service';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) { }
  private order = this.prisma.order;

  async findUnique(number: string) {
    return this.order.findUnique({
      where: {
        number,
      },
      include: {
        items: {
          select: {
            name: true,
            amount: true,
          },
        },
      },
    });
  }
}