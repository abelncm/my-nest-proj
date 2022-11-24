import { Injectable } from "@nestjs/common";
import { Cat } from "./cat.entity";
import { Person } from "./person.entity";

@Injectable()
export class PersonsService {

    listOfPersons: Array<Person> = [
        {
            id: 11,
            name: "Game of Thrones",
            phone: 5802943
        },
        {
            id: 12,
            name: "Alvinho",
            phone: 5638290
        },
        {
            id: 13,
            name: "Vera",
            phone: 5638290
        },
        {
            id: 14,
            name: "Domingo",
            phone: 8987344
        }
    ];

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.id + 1;
    }

    getAll(): Array<Person> {

        return this.listOfPersons;

    }

    add(newPerson: Person): Person {
        newPerson.id = this.generateId();
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

    update(id: number, updatedData: Person) {

    }

}