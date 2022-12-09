import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';
import { Task } from '../entities/task.entity';
import { PersonService } from './person.service';
import { TaskService } from './task.service';

@Injectable()
export class AssignTaskService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    private taskService: TaskService,
    private personService: PersonService,
  ) { }

  async getPersonAssignedTasks(personId: number) {
    const person: Person = await this.personService.findOne(personId);
    return person.getAssignedTasks();
  }

  async unassignTasksFromPerson(personId:number, taskIdList: Array<number>) {
    const person:Person = await this.personService.findOne(personId);

    for(const taskId of taskIdList) {
      const task: Task = await this.taskService.findOne(taskId);
      await person.unassignTask(task);
    }

    // console.log(person.getTasks());

    const savedPerson: Person = await this.personRepository.save(person);
    return savedPerson.getAssignedTasks();
  }

  // async checkDoingTask(person: Person, task: Task) {
  //   const isDoingTask = await this.personTasksRepository.exist(<any>{
  //     where: {
  //       person: {id: person.getId()},
  //       task: {id: task.getId()}
  //     }
  //   });

  //   if(isDoingTask) {
  //     const fullname = person.getFullName();
  //     throw new ConflictException(`${fullname} is already doing the task: ${task.getTitle()}`);
  //   }
  // }
  
  async assignTasksToPerson(personId:number, taskIdList: Array<number>) {
    
    const person = await this.personService.findOne(personId);

    for (const taskId of taskIdList) {
      const task = await this.taskService.findOne(taskId);
      // await this.checkDoingTask(person, task);
      
      await person.assignTask(task);
    }
    // console.log(person.getTasks());

    const savedPerson = await this.personRepository.save(person);
    
    return savedPerson.getAssignedTasks();
    
  }

  async markTasksAsComplete(personId:number, taskIdList: Array<number>) {
    const person: Person = await this.personService.findOne(personId);

    for(const taskId of taskIdList) {
      const task: Task = await this.taskService.findOne(taskId);

      await person.markTaskAsComplete(task);
    }

    const savedPerson: Person = await this.personRepository.save(person);
    return savedPerson.getAssignedTasks();
  }

  async getCompleteTasks(personId: number) {
    const person: Person = await this.personService.findOne(personId);
    return person.getCompleteTasks();
  }

  async getIncompleteTasks(personId: number) {
    const person: Person = await this.personService.findOne(personId);
    return person.getIncompleteTasks();
  }
}
