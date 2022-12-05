import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";
import { Task } from "./task.entity";

@Entity()
export class PersonHasTask {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Task, (task)=>task.people, { nullable: false })
    task: Task;
    
    @ManyToOne(()=>Person, (person)=>person.tasks, { nullable: false })
    person: Person;

    @Column()
    done: boolean;

}