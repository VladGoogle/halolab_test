import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SensorDto } from '../dtos/sensor.dto';
import { SensorService } from '../services/sensor.service';
import { SensorProducer } from '../producers/sensor.producer';

@Controller('group')
export class SensorController {
  constructor(
    private sensorService: SensorService,
    private sensorProducer: SensorProducer,
  ) {}

  @Post(':id/sensor/create')
  async createGroup(
    @Body() data: SensorDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.sensorService.createSensor({
      ...data,
      groupId: id,
    });
  }

  @Post(':id/sensors')
  async updateSensorData() {
    return await this.sensorProducer.pushUpdateAction();
  }

  @Get(':groupId/sensor/:id')
  async getSensorById(
    @Body() data: SensorDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.sensorService.createSensor({
      ...data,
      groupId: id,
    });
  }
}
