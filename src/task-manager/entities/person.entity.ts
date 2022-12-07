import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";
import { ParentalRelationship } from "./parental-relationship.entity";
import { PersonHasTask } from "./person-has-task.entity";


@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;
    
    @ManyToOne(() => City, (city) => city.people, { nullable: false, eager:true })
    city: City;

    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.parent)
    parents: Array<ParentalRelationship>;
    
    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.child)
    children: Array<ParentalRelationship>;

    @OneToMany(()=>PersonHasTask, (personTask)=>personTask.person, {cascade:true})
    tasks: Promise<PersonHasTask[]>;

    constructor(firstName:string, lastName:string, phone:string, city:City) {
        this.updateName(firstName, lastName);
        this.updatePhone(phone);
        this.movedToCity(city);
    }

    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    getCity() {
        return this.city;
    }

    getTasks() {
        return this.tasks;
    }

    getParents() {
        return this.parents;
    }

    getChildren() {
        return this.children;
    }
    
    updateName(firstName:string, lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    updatePhone(phone:string) {
        this.phone=phone;
    }

    movedToCity(city: City) {
        this.city=city;
    }
}