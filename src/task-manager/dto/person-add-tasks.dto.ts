import { IsArray } from "class-validator";


export class PersonAddTasksDto {

    @IsArray()
    tasks: Array<number>;

}