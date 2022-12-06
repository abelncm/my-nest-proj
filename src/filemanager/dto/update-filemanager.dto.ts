import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateFilemanagerDto {

    @ApiProperty()
    @IsString()
    content: string
}
