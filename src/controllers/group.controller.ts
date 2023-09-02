import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GroupDto } from '../dtos/group.dto';
import { GroupService } from '../services/group.service';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post('create')
  async createGroup(@Body() data: GroupDto) {
    return await this.groupService.createGroup(data);
  }

  @Get(':id')
  async getGroupById(@Param('id', ParseIntPipe) id: number) {
    return await this.groupService.getGroupById(id);
  }

  @Get(':groupName/transparency/average')
  async getAvgTransparencyInsideGroup(@Param('groupName') name: string) {
    return await this.groupService.getAvgTransparencyInsideGroup(name);
  }

  @Get(':groupName/temperature/average')
  async getAvgTemperatureInsideGroup(@Param('groupName') name: string) {
    return await this.groupService.getAvgTemperatureInsideGroup(name);
  }

  @Get(':groupName/species')
  async getAllSpeciesInsideGroup(@Param('groupName') name: string) {
    return await this.groupService.getAllSpeciesInsideGroup(name);
  }

  @Get(':groupName/species/top/:limit')
  async getLimitedSpeciesInsideGroup(
    @Param('groupName') name: string,
    @Param('limit', ParseIntPipe) limit: number,
  ) {
    return await this.groupService.getLimitedSpeciesInsideGroup(name, limit);
  }
}
