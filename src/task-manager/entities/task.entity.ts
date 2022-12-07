import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonHasTask } from "./person-has-task.entity";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private title: string;

    @OneToMany(()=>PersonHasTask, (personTask)=>personTask.getTask)
    private people: Array<PersonHasTask>;


    constructor(title:string) {
        this.title=title;
    }

    updateTask(title:string) {
        this.title=title;
    }

    getPeople(){return this.people}
}