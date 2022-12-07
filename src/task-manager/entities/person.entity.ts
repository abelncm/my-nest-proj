import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";
import { ParentalRelationship } from "./parental-relationship.entity";
import { PersonHasTask } from "./person-has-task.entity";


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
    
    @ManyToOne(() => City, (city) => city.getPeople, { nullable: false, eager:true })
    private city: City;

    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.getParent)
    private parents: Array<ParentalRelationship>;
    
    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.getChild)
    private children: Array<ParentalRelationship>;

    @OneToMany(()=>PersonHasTask, (personTask)=>personTask.getPerson)
    private tasks: Array<PersonHasTask>;

    constructor(firstName:string, lastName:string, phone:string, city:City) {
        this.updateName(firstName, lastName);
        this.updatePhone(phone);
        this.movedToCity(city);
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