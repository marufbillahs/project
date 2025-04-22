import { IsNotEmpty } from 'class-validator';

export class CheckDto {
  @IsNotEmpty()
  title: string;
}
