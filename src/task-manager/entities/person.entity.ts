import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";


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
    
    @ManyToOne(() => City, (city) => city.people)
    city: City;


}