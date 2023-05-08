import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class SensorProducer {
  constructor(@InjectQueue('update-data') private updateQueue: Queue) {}

  async pushUpdateAction() {
    await this.updateQueue.add('update-data', {});
  }
}
