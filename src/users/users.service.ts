import { Injectable } from '@nestjs/common';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
    getHello(): string {
        return 'Maruf';
      }
    

      constructor(
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>
    ) {}

    getAbd() {
      return 'First Time';
    }
    

    async createPhoto(photoData: Partial<Photo>): Promise<Photo> {
      const photo = this.photoRepository.create(photoData);
      return this.photoRepository.save(photo);
  }

  async getPhotos(): Promise<Photo[]> {
      return this.photoRepository.find();
  }

  

}
