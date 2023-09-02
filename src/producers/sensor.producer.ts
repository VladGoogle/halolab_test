import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { SensorService } from '../services/sensor.service';

@Injectable()
export class SensorProducer {
  constructor(
    @InjectQueue('sensor-queue') private updateQueue: Queue,
    private readonly sensorService: SensorService,
  ) {}

  async pushUpdateAction() {
    const sensors = await this.sensorService.getAllSensors();
    sensors.map((sensor) => {
      return this.updateQueue.add(
        `update-sensor-${sensor.id}`,
        {
          id: sensor.id,
        },
        {
          repeat: {
            every: sensor.DOR * 1000,
          },
        },
      );
    });
  }
}
