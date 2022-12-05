import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({length: 500})
    private name: string;
    
    @Column({nullable: true})
    private age: number;

}