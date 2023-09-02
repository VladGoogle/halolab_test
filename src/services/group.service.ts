import { Injectable } from '@nestjs/common';
import { GroupDto } from '../dtos/group.dto';
import { GroupQueries } from '../queries/group.queries';

@Injectable()
export class GroupService {
  constructor(private groupQueries: GroupQueries) {}

  async createGroup(data: GroupDto) {
    return await this.groupQueries.createGroup(data);
  }

  async getGroupById(id: number) {
    return await this.groupQueries.getGroupById(id);
  }

  async getAvgTransparencyInsideGroup(name: string) {
    return await this.groupQueries.getAvgTransparencyInsideGroup(name);
  }

  async getAvgTemperatureInsideGroup(name: string) {
    return await this.groupQueries.getAvgTemperatureInsideGroup(name);
  }

  async getAllSpeciesInsideGroup(name: string) {
    return await this.groupQueries.getAllSpeciesInsideGroup(name);
  }

  async getLimitedSpeciesInsideGroup(name: string, limit: number) {
    return await this.groupQueries.getLimitedSpeciesInsideGroup(name, limit);
  }
}
