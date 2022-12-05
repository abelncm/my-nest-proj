import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";


@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @OneToMany(() => Person, (person) => person.city)
    people: Array<Person>

}