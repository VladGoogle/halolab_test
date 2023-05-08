import { Injectable, NotFoundException } from '@nestjs/common';
import {
  generateRandomIntNumber,
  generateRandomFloatNumber,
} from '../utilities/generateNumber.utility';
import { SensorDto } from '../dtos/sensor.dto';
import { PrismaService } from '../services/prisma.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class SensorQueries {
  constructor(private prisma: PrismaService) {}

  async createSensor(data: SensorDto) {
    try {
      return await this.prisma.sensor.create({
        data: {
          ...data,
          codename: `${
            (
              await this.prisma.group.findUniqueOrThrow({
                where: { id: data.groupId },
              })
            ).name
          } ${(await this.prisma.sensor.count()) + 1}`,
          coordinates: {
            create: {
              x_coord: generateRandomFloatNumber(),
              y_coord: generateRandomFloatNumber(),
              z_coord: generateRandomFloatNumber(),
            },
          },
        },
        include: {
          coordinates: true,
          group: true,
          sensorData: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getSensorById(id: number) {
    try {
      return await this.prisma.sensor.findUniqueOrThrow({
        where: { id: id },
        include: {
          coordinates: true,
          group: true,
          sensorData: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getAllSensors() {
    try {
      return await this.prisma.sensor.findMany({
        include: {
          coordinates: true,
          group: true,
          sensorData: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async updateSensorData(id: number) {
    try {
      return await this.prisma.sensorData.upsert({
        where: { sensorId: id },
        update: {
          transparency: generateRandomIntNumber(0, 100),
          temperature: generateRandomFloatNumber(),
          fishes: {
            update: {
              where: { sensorId: id },
              data: {
                type: faker.animal.fish(),
                count: generateRandomIntNumber(0, 100),
              },
            },
          },
        },
        create: {
          sensorId: id,
          transparency: generateRandomIntNumber(0, 100),
          temperature: generateRandomFloatNumber(),
          fishes: {
            create: {
              type: faker.animal.fish(),
              count: generateRandomIntNumber(0, 100),
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
