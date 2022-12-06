import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
import { City } from './entities/city.entity';

@ApiTags('City')
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) { }

  @Post()
  create(@Body() createCityDto: CityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.cityService.findAll(query);
  }

  @ApiResponse({type: City})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cityService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCityDto: CityDto) {
    return this.cityService.update(id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cityService.remove(id);
  }
}
