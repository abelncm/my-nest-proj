import { IsArray } from "class-validator";


export class PersonTasksDto {

    @IsArray()
    private tasks: Array<number>;

    getTasks() {
        return this.tasks;
    }
}