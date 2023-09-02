import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { GroupDto } from '../dtos/group.dto';

@Injectable()
export class GroupQueries {
  constructor(private prisma: PrismaService) {}

  async createGroup(data: GroupDto) {
    try {
      return await this.prisma.group.create({
        data: {
          ...data,
        },
        include: {
          sensors: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getAvgTransparencyInsideGroup(name: string) {
    try {
      return await this.prisma.sensorData.aggregate({
        _avg: {
          transparency: true,
        },
        where: {
          sensor: {
            group: {
              name: name,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getAvgTemperatureInsideGroup(name: string) {
    try {
      return await this.prisma.sensorData.aggregate({
        _avg: {
          temperature: true,
        },
        where: {
          sensor: {
            group: {
              name: name,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getAllSpeciesInsideGroup(name: string) {
    try {
      return await this.prisma.sensorData.findMany({
        select: {
          sensorId: false,
          transparency: false,
          temperature: false,
          sensor: false,
          fishes: true,
        },
        where: {
          sensor: {
            group: {
              name: name,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getLimitedSpeciesInsideGroup(name: string, limit: number) {
    try {
      return await this.prisma.sensorData.findMany({
        take: limit,
        select: {
          sensorId: false,
          transparency: false,
          temperature: false,
          sensor: false,
          fishes: true,
        },
        where: {
          sensor: {
            group: {
              name: name,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getGroupById(id: number) {
    try {
      return await this.prisma.group.findFirstOrThrow({
        where: { id: id },
        include: {
          sensors: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
