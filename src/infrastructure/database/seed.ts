import { PrismaClient } from '@prisma/client';

import { orders } from './data/orders';
import { items } from './data/items';

const prisma = new PrismaClient();

async function run() {
  try {
    const item = await prisma.item.count();
    const order = await prisma.order.count();

    if (!item) {
      await prisma.item.createMany({ data: items });
    }

    if (!order) {
      for (const orderData of orders) {
    
        const items = await prisma.item.findMany({
          where: {
            name: {
              in: orderData.items.map((item: { name: any; }) => item.name),
            },
          },
        });

        const itemIds = items.map(item => item.id);

        await prisma.order.create({
          data: {
            number: orderData.number,
            amount: orderData.amount,
            currency: orderData.currency,
            status: orderData.status,
            items: {
              connect: itemIds.map(itemId => ({ id: itemId })),
            },
          },
        });
      }
    }
    
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

run().catch((error) => console.error(error));
  
