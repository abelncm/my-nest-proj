import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create(@Body() createCityDto: CityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cityService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskManagerDto: UpdateTaskManagerDto) {
  //   return this.cityService.update(+id, updateTaskManagerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cityService.remove(+id);
  // }
}
