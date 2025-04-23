import { Controller,Body,Post, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CheckDto } from './DTO/check.dto';
import { get } from 'http';
import { Photo } from './photo.entity';

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

  @Get('check')
  @UsePipes(new ValidationPipe())
  getAbd(@Body() ab:CheckDto) {
    return ab;

  }

  @Post('photos')
  async createPhoto(@Body() photoData: Partial<Photo>) {
      return this.usersService.createPhoto(photoData);
  }

  @Get('photos')
  async getPhotos() {
      return this.usersService.getPhotos();
  }


  
}
