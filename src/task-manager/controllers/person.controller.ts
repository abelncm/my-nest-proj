import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { PersonDto } from '../dtos/person.dto';
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

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePersonDto: PersonDto) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}
