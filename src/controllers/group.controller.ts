import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GroupDto } from '../dtos/group.dto';
import { GroupQueries } from '../queries/group.queries';

@Controller('group')
export class GroupController {
  constructor(private groupQueries: GroupQueries) {}

  @Post('create')
  async createGroup(@Body() data: GroupDto) {
    return await this.groupQueries.createGroup(data);
  }

  @Get(':id')
  async getGroupById(@Param('id', ParseIntPipe) id: number) {
    return await this.groupQueries.getGroupById(id);
  }
}
