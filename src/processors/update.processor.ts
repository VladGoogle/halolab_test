import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { SensorService } from '../services/sensor.service';

@Processor('update-data')
class SensorProcessor extends WorkerHost {
  constructor(private sensorService: SensorService) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    const sensors = await this.sensorService.getAllSensors();
    sensors.forEach((sensor) => {
      setInterval(async () => {
        await this.sensorService.updateSensorData(sensor.id);
      }, sensor.DOR * 1000);
    });
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    // do some stuff
  }
}
