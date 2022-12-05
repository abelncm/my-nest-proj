import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityDto } from './dto/city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}

  create(createCityDto: CityDto) {
    const newCity = new City(createCityDto.name);
    return this.cityRepository.save(newCity);
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} taskManager`;
  }

  update(id: number, updateTaskManagerDto) {
    return `This action updates a #${id} taskManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskManager`;
  }
}
