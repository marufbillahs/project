import { Controller,Body,Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CheckDto } from './DTO/check.dto';
import { get } from 'http';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }
  @Post('check')
  checkDto(@Body() dto: CheckDto) {
    return dto;
  }
}
