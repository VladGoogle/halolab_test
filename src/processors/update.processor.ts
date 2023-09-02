import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { SensorService } from '../services/sensor.service';

@Processor('sensor-queue')
export class SensorProcessor extends WorkerHost {
  constructor(private sensorService: SensorService) {
    super();
  }

  async process(job: Job<any, any, string>) {
    return this.sensorService.updateSensorData(job.data.id);
  }

  @OnWorkerEvent('active')
  onActive() {
    console.log('Active');
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('Completed');
  }
}
