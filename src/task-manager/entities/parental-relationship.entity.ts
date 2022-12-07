import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity()
export class ParentalRelationship {

    @PrimaryGeneratedColumn()
    private id: number;

    @ManyToOne(()=>Person, (person)=>person.getParents, { nullable: false })
    private parent: Person;
    
    @ManyToOne(()=>Person, (person)=>person.getChildren, { nullable: false })
    private child: Person;

    getParent() {
        return this.parent;
    }

    getChild() {
        return this.child;
    }
}