import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from '../../infrastructure/database/connection/prisma.module';

@Module({  
  imports: [PrismaModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
