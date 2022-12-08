import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";
import { ParentalRelationship } from "./parental-relationship.entity";
import { TaskAssignment } from "./task-assignment.entity";
import { Task } from "./task.entity";


@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private firstName: string;

    @Column()
    private lastName: string;

    @Column()
    private phone: string;

    @ManyToOne(() => City, (city) => city['people'], { nullable: false, eager: true })
    private city: City;

    @OneToMany(() => ParentalRelationship, (relationship) => relationship['parent'])
    private parents: Array<ParentalRelationship>;

    @OneToMany(() => ParentalRelationship, (relationship) => relationship['child'])
    private children: Array<ParentalRelationship>;

    @OneToMany(() => TaskAssignment, (personTask) => personTask['person'], { cascade: true })
    private tasks: Promise<Array<TaskAssignment>>;

    constructor(firstName: string, lastName: string, phone: string, city: City) {
        this.updateName(firstName, lastName);
        this.updatePhone(phone);
        this.changeAddress(city);
    }

    getId() {
        return this.id;
    }

    getTasks() {
        return this.tasks;
    }

    async addTask(task: Task) {
        const personTasks = new TaskAssignment(this, task);
        (await this.tasks).push(personTasks);
    }

    async removeTask(task: Task) {
        let personTasks: Array<TaskAssignment> = await this.tasks;
        const remainingTasks: Array<TaskAssignment> = personTasks.filter(personTask => personTask.getTask().getId() != task.getId());
        personTasks=remainingTasks;
    }

    async markTaskAsCompleted(task: Task) {
        const foundTask: TaskAssignment = (await this.tasks).find(personTask => personTask.getTask().getId() == task.getId());

        if (!foundTask)
            throw new Error(`The task ${task.getTitle()} was not added to ${this.getFullName()}`);

        foundTask.completed();
    }

    async getCompletedTasks() {
        const tasks: Array<TaskAssignment> = await this.tasks;
        return tasks.filter(task=>task.isCompleted());
    }

    async getUndoneTasks() {
        const tasks: Array<TaskAssignment> = await this.tasks;
        return tasks.filter(task=>!task.isCompleted());
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    updateName(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    updatePhone(phone: string) {
        this.phone = phone;
    }

    changeAddress(city: City) {
        this.city = city;
    }
}