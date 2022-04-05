import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  getRootRouter() {
    return 'Hi there !';
  }

  @Get('health')
  getHealthy() {
    return "Hi I'm alive and running !";
  }

  @Get('/')
  getByThere() {
    return "Hi I'm alive and running !";
  }
}
