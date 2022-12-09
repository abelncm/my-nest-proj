import { Module } from '@nestjs/common';
import { CityService } from './services/city.service';
import { CityController } from './controllers/city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { City } from './entities/city.entity';
import { ParentalRelationship } from './entities/parental-relationship.entity';
import { Task } from './entities/task.entity';
import { TaskAssignment } from './entities/task-assignment.entity';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { PersonService } from './services/person.service';
import { PersonController } from './controllers/person.controller';
import { AssignTaskController } from './controllers/assign-task.controller';
import { AssignTaskService } from './services/assign-task.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    City,
    Person, 
    ParentalRelationship,
    Task,
    TaskAssignment
  ])],
  controllers: [
    CityController, 
    TaskController, 
    PersonController, 
    AssignTaskController
  ],
  providers: [
    CityService, 
    TaskService, 
    PersonService, 
    AssignTaskService
  ]
})
export class TaskManagerModule {}
