import { Injectable } from "@nestjs/common";
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
        return lastPerson.id + 1;
    }

    getAll(): Array<Person> {
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
            if (person.id == id) {
                return person;
            }
        }
        return null;
    }

    delete(id: number) {

    }

    update(id: number, name: string, phone: number): Person {

        for (let person of this.listOfPersons) {
            if (id == person.getId()) {
                person.changeName(name);
                person.changePhoneNumber(phone);
                return person;
            }
        }

        return null;
    }

}