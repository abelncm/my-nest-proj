

export class Person {

    id: number;
    name: string;
    phone: number;

    constructor(id:number, name:string, phone:number) {
        this.id=id;
        this.name=name;
        this.phone=phone;
    }

    getName(): string {
        return this.name;
    }

    getPhone(): string {
        return this.phone;
    }
}