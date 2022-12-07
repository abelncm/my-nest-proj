import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";
import { Task } from "./task.entity";

@Entity()
export class PersonHasTask {

    @PrimaryGeneratedColumn()
    private id: number;

    @ManyToOne(()=>Task, (task)=>task.getPeople, { nullable: false })
    private task: Task;
    
    @ManyToOne(()=>Person, (person)=>person.getTasks, { nullable: false })
    private person: Person;

    @Column()
    private done: boolean;

    getPerson() {return this.person;}
    getTask() {return this.task;}
}