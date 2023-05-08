import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { identity } from 'rxjs';
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
