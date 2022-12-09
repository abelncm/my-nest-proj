import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonTasksDto } from '../dtos/person-tasks.dto';
import { AssignTaskService } from '../services/assign-task.service';

@ApiTags('Assign Task')
@Controller('persons')
export class AssignTaskController {

  constructor(private readonly assignTaskService: AssignTaskService) { }

  @Get(':id/tasks')
  getPersonTasks(@Param('id') id: number) {
    return this.assignTaskService.getPersonAssignedTasks(id);
  }

  @Put(':id/tasks')
  addTasksToPerson(@Param('id') id: number, @Body() addTasksDto: PersonTasksDto) {
    return this.assignTaskService.assignTasksToPerson(id, addTasksDto.getTasks());
  }

  @Put(':id/tasks/done')
  markTasksAsComplete(@Param('id') id: number, @Body() doneTasksDto: PersonTasksDto) {
    return this.assignTaskService.markTasksAsComplete(id, doneTasksDto.getTasks());
  }

  @Get(':id/tasks/done')
  getCompleteTasks(@Param('id') id: number) {
    return this.assignTaskService.getCompleteTasks(id);
  }

  @Get(':id/tasks/undone')
  getIncompleteTasks(@Param('id') id: number) {
    return this.assignTaskService.getIncompleteTasks(id);
  }

  @Delete(':id/tasks')
  deleteTasks(@Param('id') id: number, @Body() deleteTasksDto: PersonTasksDto) {
    return this.assignTaskService.unassignTasksFromPerson(id, deleteTasksDto.getTasks());
  }
}
