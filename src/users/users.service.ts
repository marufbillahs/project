import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(): string {
        return 'Maruf';
      }
      getAbd() {
        return 'First Time';
      }
}
