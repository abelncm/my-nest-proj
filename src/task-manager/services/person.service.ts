import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import paginateDefaults from 'src/config/pagination/defaults';
import { Repository } from 'typeorm';
import { PersonDto } from '../dto/person.dto';
import { City } from '../entities/city.entity';
import { Person } from '../entities/person.entity';
import { NotFoundException } from '../exceptions/not-found.exception';
import { CityService } from './city.service';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    private cityService: CityService
  ) { }

  async create(createPersonDto: PersonDto) {

    const city = await this.cityService.findOne(createPersonDto.getCityId());

    const newPerson = new Person(
      createPersonDto.getFirstName(),
      createPersonDto.getLastName(),
      createPersonDto.getPhone(),
      city
    );
    return this.personRepository.save(newPerson);
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.personRepository, paginateDefaults);
  }

  async findOne(id: number) {
    const person = await this.personRepository.findOneBy(<any>{ id: id });

    if (!person)
      throw new NotFoundException(`Person with id ${id} not found!`);

    return person;
  }

  async update(id: number, updatePersonDto: PersonDto) {

    const person = await this.findOne(id);    
    const city = await this.cityService.findOne(updatePersonDto.getCityId());

    person.updateName(updatePersonDto.getFirstName(), updatePersonDto.getLastName());
    person.updatePhone(updatePersonDto.getPhone());
    person.movedToCity(city);

    return this.personRepository.save(person);

  }

  remove(id: number) {
    this.personRepository.delete(id);
  }
}
