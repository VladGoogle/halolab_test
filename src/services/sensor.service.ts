import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { identity } from 'rxjs';
import { GroupDto } from '../dtos/group.dto';
import { GroupQueries } from '../queries/group.queries';
import { SensorQueries } from '../queries/sensor.queries';
import { SensorDto } from '../dtos/sensor.dto';

@Injectable()
export class SensorService {
  constructor(private sensorQueries: SensorQueries) {}

  async createSensor(data: SensorDto) {
    return await this.sensorQueries.createSensor(data);
  }

  async getSensorById(id: number) {
    return await this.sensorQueries.getSensorById(id);
  }

  async getAllSensors() {
    return await this.sensorQueries.getAllSensors();
  }

  async updateSensorData(id: number) {
    return await this.sensorQueries.updateSensorData(id);
  }
}
