import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";


@Entity()
export class City {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    private id: number;
    
    @ApiProperty()
    @Column()
    private name: string;
    
    @ApiProperty()
    @OneToMany(() => Person, (person) => person.getCity)
    private people: Array<Person>;

    constructor(name: string) {
        this.name=name;
    }

    updateName(name:string) {
        this.name=name;
    }

    getPeople() {return this.people;}    

}