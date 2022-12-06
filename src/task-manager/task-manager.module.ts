import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { City } from './entities/city.entity';
import { ParentalRelationship } from './entities/parental-relationship.entity';
import { Task } from './entities/task.entity';
import { PersonHasTask } from './entities/person-has-task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    City,
    Person, 
    ParentalRelationship,
    Task,
    PersonHasTask
  ])],
  controllers: [CityController, TaskController],
  providers: [CityService, TaskService]
})
export class TaskManagerModule {}
