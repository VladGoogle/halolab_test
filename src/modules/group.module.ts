import { Module } from '@nestjs/common';
import { GroupController } from '../controllers/group.controller';
import { GroupService } from '../services/group.service';
import { PrismaService } from '../services/prisma.service';
import { GroupQueries } from '../queries/group.queries';

@Module({
  controllers: [GroupController],
  providers: [GroupService, PrismaService, GroupQueries],
  exports: [GroupService],
})
export class GroupModule {}
