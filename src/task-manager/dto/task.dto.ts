import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class TaskDto {

    @ApiProperty()
    @IsString()
    private name: string;

    getName() {
        return this.name;
    }
    
}
