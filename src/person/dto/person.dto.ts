import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";


export class PersonDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsInt()
    phone: number;
}