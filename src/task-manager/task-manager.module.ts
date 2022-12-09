import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignTaskController } from './controllers/assign-task.controller';
import { CityController } from './controllers/city.controller';
import { PersonController } from './controllers/person.controller';
import { TaskController } from './controllers/task.controller';
import { City } from './entities/city.entity';
import { ParentalRelationship } from './entities/parental-relationship.entity';
import { Person } from './entities/person.entity';
import { TaskAssignment } from './entities/task-assignment.entity';
import { Task } from './entities/task.entity';
import { AssignTaskService } from './services/assign-task.service';
import { CityService } from './services/city.service';
import { PersonService } from './services/person.service';
import { TaskService } from './services/task.service';

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
    AssignTaskService,
  ]
})
export class TaskManagerModule {}
