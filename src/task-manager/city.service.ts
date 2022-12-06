import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import paginateDefaults from 'src/config/pagination/defaults';
import { Repository } from 'typeorm';
import { CityDto } from './dto/city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) { }

  create(createCityDto: CityDto) {
    const newCity = new City(createCityDto.getName());
    return this.cityRepository.save(newCity);
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.cityRepository, paginateDefaults);
  }

  findOne(id: number) {
    return this.cityRepository.findOne({
      where: {
        id: id,
      }
    });
  }

  async update(id: number, updateCityDto: CityDto) {

    const city: City = await this.findOne(id);
    
    city.updateName(updateCityDto.getName())

    return this.cityRepository.save(city);
  }

  remove(id: number) {
    this.cityRepository.delete(id);
  }
}
