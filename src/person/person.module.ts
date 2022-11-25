import { Module } from '@nestjs/common';
import { PersonsController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  controllers: [PersonsController],
  providers: [PersonService],
})
export class PersonsModule {}
