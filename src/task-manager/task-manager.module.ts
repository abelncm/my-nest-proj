import { Module } from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import { TaskManagerController } from './task-manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City,Person])],
  controllers: [TaskManagerController],
  providers: [TaskManagerService]
})
export class TaskManagerModule {}
