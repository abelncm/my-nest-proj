import { Injectable } from '@nestjs/common';
import { CreateTaskManagerDto } from './dto/create-task-manager.dto';
import { UpdateTaskManagerDto } from './dto/update-task-manager.dto';

@Injectable()
export class TaskManagerService {
  create(createTaskManagerDto: CreateTaskManagerDto) {
    return 'This action adds a new taskManager';
  }

  findAll() {
    return `This action returns all taskManager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskManager`;
  }

  update(id: number, updateTaskManagerDto: UpdateTaskManagerDto) {
    return `This action updates a #${id} taskManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskManager`;
  }
}
