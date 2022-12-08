import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import paginateDefaults from 'src/config/pagination/defaults';
import { In, Repository } from 'typeorm';
import { PersonDto } from '../dtos/person.dto';
import { PersonHasTask } from '../entities/person-has-task.entity';
import { Person } from '../entities/person.entity';
import { Task } from '../entities/task.entity';
import { ConflictException } from '../exceptions/conflict.exception';
import { NotFoundException } from '../exceptions/not-found.exception';
import { CityService } from './city.service';
import { TaskService } from './task.service';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(PersonHasTask)
    private personTasksRepository: Repository<PersonHasTask>,
    private cityService: CityService,
    private taskService: TaskService
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
    person.changeAddress(city);

    return this.personRepository.save(person);

  }

  remove(id: number) {
    this.personRepository.delete(id);
  }

  async getTasks(personId: number) {
    const person: Person = await this.findOne(personId);
    return person.getTasks();
  }

  async deleteTasks(personId:number, taskIdList: Array<number>) {

    await this.findOne(personId);

    const tasksToDeleteList: Array<PersonHasTask> = await this.personTasksRepository.find({
      where: {
        person: {id: personId},
        task: {id: In(taskIdList)}
      }
    });

    await this.personTasksRepository.remove(tasksToDeleteList);

    return this.personTasksRepository.find({
      where: {person:{id:personId}}
    });

  }

  async checkDoingTask(person: Person, task: Task) {
    const isDoingTask = await this.personTasksRepository.exist({
      where: {
        person: {id: person.getId()},
        task: {id: task.getId()}
      }
    });

    if(isDoingTask) {
      const fullname = person.getFullName();
      throw new ConflictException(`${fullname} is already doing the task: ${task.getTitle()}`);
    }
  }
  
  async addTasks(personId:number, taskIdList: Array<number>) {
    
    const person = await this.findOne(personId);

    for (const taskId of taskIdList) {
      const task = await this.taskService.findOne(taskId);
      await this.checkDoingTask(person, task);
      person.addTask(task);
    }

    const savedPerson = await this.personRepository.save(person);
    
    return savedPerson.getTasks();
    
  }
}
