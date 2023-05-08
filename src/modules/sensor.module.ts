import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SensorController } from '../controllers/sensor.controller';
import { SensorService } from '../services/sensor.service';
import { SensorQueries } from '../queries/sensor.queries';
import { Queue } from 'bullmq';
import { SensorProducer } from '../producers/sensor.producer';

@Module({
  controllers: [SensorController],
  providers: [
    SensorService,
    PrismaService,
    SensorQueries,
    SensorProducer,
    Queue,
  ],
  exports: [SensorService],
})
export class SensorModule {}
