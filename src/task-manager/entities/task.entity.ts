import { Exclude } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskAssignment } from "./person-has-task.entity";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private title: string;

    @OneToMany(()=>TaskAssignment, (personTask)=>personTask['task'])
    private people: Array<TaskAssignment>;


    constructor(title:string) {
        this.title=title;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    updateTask(title:string) {
        this.title=title;
    }
}