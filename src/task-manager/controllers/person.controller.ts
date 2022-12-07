import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { PersonAddTasksDto } from '../dto/person-add-tasks.dto';
import { PersonDto } from '../dto/person.dto';
import { Person } from '../entities/person.entity';
import { PersonService } from '../services/person.service';

@ApiTags('Person')
@Controller('persons')
export class PersonController {

  constructor(private readonly personService: PersonService) { }

  @Post()
  create(@Body() createPersonDto: PersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.personService.findAll(query);
  }

  @ApiResponse({type: Person})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personService.findOne(id);
  }

  @Get(':id/tasks')
  getPersonTasks(@Param('id') id: number) {
    return this.personService.getTasks(id);
  }

  @Put(':id/tasks')
  addTasks(@Param('id') id: number, @Body() addTasksDto: PersonAddTasksDto) {
    return this.personService.addTasks(id, addTasksDto.tasks);
  }

  @Delete(':id/tasks')
  deleteTasks(@Param('id') id: number, @Body() deleteTasksDto: PersonAddTasksDto) {
    return this.personService.deleteTasks(id, deleteTasksDto.tasks);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePersonDto: PersonDto) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
