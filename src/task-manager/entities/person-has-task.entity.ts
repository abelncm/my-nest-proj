import { Exclude } from "class-transformer";
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";
import { Task } from "./task.entity";

@Entity()
@Index(["task", "person"], { unique: true })
export class PersonHasTask {

    @PrimaryGeneratedColumn()
    private id: number;

    @ManyToOne(()=>Task, (task)=>task['people'], { nullable: false, eager:true })
    private task: Task;
    
    @Exclude()
    @ManyToOne(()=>Person, (person)=>person['tasks'], { nullable: false })
    private person: Person;

    @Column()
    private done: boolean = false;

    constructor(person:Person, task:Task) {
        this.person=person;
        this.task=task;
    }
}