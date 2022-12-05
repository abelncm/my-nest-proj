import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    
    @ManyToOne(() => City, (city) => city.people, { nullable: false })
    city: City;

    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.parent)
    parents: Array<ParentalRelationship>;
    
    @OneToMany(()=>ParentalRelationship, (relationship)=>relationship.child)
    children: Array<ParentalRelationship>;

    @OneToMany(()=>PersonHasTask, (personTask)=>personTask.person)
    tasks: Array<PersonHasTask>;


}