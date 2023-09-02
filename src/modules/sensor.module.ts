import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SensorController } from '../controllers/sensor.controller';
import { SensorService } from '../services/sensor.service';
import { SensorQueries } from '../queries/sensor.queries';
import { SensorProducer } from '../producers/sensor.producer';
import { BullModule } from '@nestjs/bullmq';
import { SensorProcessor } from '../processors/update.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sensor-queue',
    }),
  ],
  controllers: [SensorController],
  providers: [
    SensorService,
    PrismaService,
    SensorQueries,
    SensorProducer,
    SensorProcessor,
  ],
  exports: [SensorService],
})
export class SensorModule implements OnApplicationBootstrap {
  constructor(private readonly sensorProducer: SensorProducer) {}
  async onApplicationBootstrap(): Promise<any> {
    return this.sensorProducer.pushUpdateAction();
  }
}
