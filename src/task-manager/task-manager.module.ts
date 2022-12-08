import { Module } from '@nestjs/common';
import { CityService } from './services/city.service';
import { CityController } from './controllers/city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { City } from './entities/city.entity';
import { ParentalRelationship } from './entities/parental-relationship.entity';
import { Task } from './entities/task.entity';
import { TaskAssignment } from './entities/person-has-task.entity';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { PersonService } from './services/person.service';
import { PersonController } from './controllers/person.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    City,
    Person, 
    ParentalRelationship,
    Task,
    TaskAssignment
  ])],
  controllers: [CityController, TaskController, PersonController],
  providers: [CityService, TaskService, PersonService]
})
export class TaskManagerModule {}
