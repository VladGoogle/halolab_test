import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './modules/group.module';
import { SensorModule } from './modules/sensor.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    GroupModule,
    SensorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
