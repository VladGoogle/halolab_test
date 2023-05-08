import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class SensorDto {
  @IsNotEmpty()
  @IsInt()
  DOR: number;

  @IsOptional()
  @IsInt()
  groupId: number;
}
