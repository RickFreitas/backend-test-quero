import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getOffers(): string {
    return this.appService.getOffers();
  }

  @Get()
  getCourses(): string {
    return this.appService.getCourses();
  }
}
