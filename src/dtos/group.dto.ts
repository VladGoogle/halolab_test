import { IsString, IsNotEmpty } from 'class-validator';

export class GroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
