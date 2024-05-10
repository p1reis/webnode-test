import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';
import { PrismaModule } from '../infrastructure/database/connection/prisma.module';

@Module({
  imports: [
    OrderModule,
    ItemModule,

    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}