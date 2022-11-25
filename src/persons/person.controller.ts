import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { PersonDto } from "./dtos/person.dto";
import { Person } from "./person.entity";
import { PersonService } from "./person.service";


@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonService) { }


    @Get()
    getAll(@Query('name') searchName: string): Array<Person> {
        return this.personsService.getAll();
    }

    @Post()
    create(@Body() createPersonDto: PersonDto): Person {
        console.log(createPersonDto);

        return this.personsService.add(createPersonDto.name, createPersonDto.phone);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedData: Person) {
    }

    @Get(':id')
    getOne(@Param('id') id: number): Person {
        return this.personsService.get(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
    }
}