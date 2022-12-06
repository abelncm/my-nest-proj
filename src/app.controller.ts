import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Base path')
@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Sintaxy Academy - My NestJs Rest API';
  }
}
