import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import paginateDefaults from 'src/config/pagination/defaults';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) { }

  create(createTaskDto: TaskDto) {
    const newTask = new Task(createTaskDto.getName());
    return this.taskRepository.save(newTask);
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.taskRepository, paginateDefaults);
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({id: id});
  }

  async update(id: number, updateTaskDto: TaskDto) {

    const task: Task = await this.findOne(id);
    
    task.updateTask(updateTaskDto.getName())

    return this.taskRepository.save(task);
  }

  remove(id: number) {
    this.taskRepository.delete(id);
  }
}
