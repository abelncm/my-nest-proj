import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import { CreateTaskManagerDto } from './dto/create-task-manager.dto';
import { UpdateTaskManagerDto } from './dto/update-task-manager.dto';

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Post()
  create(@Body() createTaskManagerDto: CreateTaskManagerDto) {
    return this.taskManagerService.create(createTaskManagerDto);
  }

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskManagerDto: UpdateTaskManagerDto) {
    return this.taskManagerService.update(+id, updateTaskManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskManagerService.remove(+id);
  }
}
