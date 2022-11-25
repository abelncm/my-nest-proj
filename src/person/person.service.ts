import { Injectable } from "@nestjs/common";
import { NotFoundException } from "src/common/exceptions/not-found.exception";
import { Cat } from "./cat.entity";
import { Person } from "./person.entity";

@Injectable()
export class PersonService {

    listOfPersons: Array<Person> = new Array(
        new Person(11, 'Game of Thrones 1', 42345324),
        new Person(12, 'Game of Thrones 2', 42345324),
        new Person(13, 'Game of Thrones 3', 42345324),
        new Person(14, 'Game of Thrones 4', 42345324),
        new Person(15, 'Game of Thrones 5', 42345324),
    );

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.getId() + 1;
    }

    getAll(searchName: string): Array<Person> {
        if (searchName != null) {
            let result = [];
    
            for (let person of this.listOfPersons) {
                if (person.getName() == searchName) {
                    result.push(person);
                }
            }
    
            return result;
        }
        
        return this.listOfPersons;
    }

    add(name: string, phone:number): Person {
        
        const id = this.generateId();
        const newPerson = new Person(id, name, phone);

        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    get(id: number): Person {
        for (let person of this.listOfPersons) {
            if (person.getId() == id) {
                return person;
            }
        }
        throw new NotFoundException(`Person with id ${id} not found!`);

    }

    delete(id: number): void {
        
        for(let pos:number=0; pos<this.listOfPersons.length; pos++) {

            let person = this.listOfPersons[pos];

            if (person.getId() == id) {
                this.listOfPersons.splice(pos, 1);
                return;
            }
        }
        
        throw new NotFoundException(`Person with id ${id} not found!`);
    }

    update(id: number, name: string, phone: number): Person {

        for (let person of this.listOfPersons) {
            if (id == person.getId()) {
                person.changeName(name);
                person.changePhoneNumber(phone);
                return person;
            }
        }

        throw new NotFoundException(`Person with id ${id} not found!`);
    }

}