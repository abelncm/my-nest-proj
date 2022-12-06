import { IsString } from "class-validator";

export class TaskDto {

    @IsString()
    private name: string;

    getName() {
        return this.name;
    }
    
}
