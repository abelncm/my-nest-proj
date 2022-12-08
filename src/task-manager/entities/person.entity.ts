import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";
import { ParentalRelationship } from "./parental-relationship.entity";
import { PersonHasTask } from "./person-has-task.entity";
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

    @OneToMany(() => PersonHasTask, (personTask) => personTask['person'], { cascade: true })
    private tasks: Promise<Array<PersonHasTask>>;

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
        const personTasks = new PersonHasTask(this, task);
        (await this.tasks).push(personTasks);
    }

    async completeTask(task: Task) {
        const foundTask: PersonHasTask = (await this.tasks).find(personTask => personTask.getTask().getId() == task.getId());

        if (!foundTask)
            throw new Error(`The task ${task.getTitle()} was not added to ${this.getFullName()}`);

        foundTask.completed();
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