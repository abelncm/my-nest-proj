import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { TaskDto } from '../dto/task.dto';
import { TaskService } from '../services/task.service';

@ApiTags('Task')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: TaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.taskService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: TaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
