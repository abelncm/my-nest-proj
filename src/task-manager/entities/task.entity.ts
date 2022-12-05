import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonHasTask } from "./person-has-task.entity";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(()=>PersonHasTask, (personTask)=>personTask.task)
    people: Array<PersonHasTask>;

}