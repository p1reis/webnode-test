import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/connection/prisma.service';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
}