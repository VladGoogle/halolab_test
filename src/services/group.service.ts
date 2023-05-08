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
}
