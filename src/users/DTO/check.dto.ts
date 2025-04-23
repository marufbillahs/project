import { IsNotEmpty, IsString } from 'class-validator';

export class CheckDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
