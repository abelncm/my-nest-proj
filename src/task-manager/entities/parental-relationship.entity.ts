import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity()
export class ParentalRelationship {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Person, (person)=>person.parents, { nullable: false })
    parent: Person;
    
    @ManyToOne(()=>Person, (person)=>person.children, { nullable: false })
    child: Person;

}