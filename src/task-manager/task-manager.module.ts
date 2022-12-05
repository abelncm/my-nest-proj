import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { City } from './entities/city.entity';
import { ParentalRelationship } from './entities/parental-relationship.entity';
import { Task } from './entities/task.entity';
import { PersonHasTask } from './entities/person-has-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    City,
    Person, 
    ParentalRelationship,
    Task,
    PersonHasTask
  ])],
  controllers: [CityController],
  providers: [CityService]
})
export class TaskManagerModule {}
