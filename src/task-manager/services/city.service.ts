import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import paginateDefaults from 'src/config/pagination/defaults';
import { Repository } from 'typeorm';
import { CityDto } from '../dtos/city.dto';
import { City } from '../entities/city.entity';
import { NotFoundException } from '../exceptions/not-found.exception';

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

  async findOne(id: number) {
    const city = await this.cityRepository.findOneBy(<any>{ id: id });

    if (!city)
      throw new NotFoundException(`City with id ${id} not found!`);

    return city;
  }

  async update(id: number, updateCityDto: CityDto) {

    const city: City = await this.findOne(id);

    city.updateName(updateCityDto.getName());

    return this.cityRepository.save(city);
  }

  remove(id: number) {
    this.cityRepository.delete(id);
  }
}
