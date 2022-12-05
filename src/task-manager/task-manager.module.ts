import { Module } from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import { TaskManagerController } from './task-manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [TaskManagerController],
  providers: [TaskManagerService]
})
export class TaskManagerModule {}
