import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity()
export class ParentalRelationship {

    @PrimaryGeneratedColumn()
    private id: number;

    @ManyToOne(()=>Person, (person)=>person['parents'], { nullable: false })
    private parent: Person;
    
    @ManyToOne(()=>Person, (person)=>person['children'], { nullable: false })
    private child: Person;
}