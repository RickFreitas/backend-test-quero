import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCourses(): string {
    return 'Cursos encontrados';
  }

  getOffers(): string {
    return 'Ofertas Encontradas';
  }
}
