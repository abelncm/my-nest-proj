import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFilemanagerDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    content: string
}
