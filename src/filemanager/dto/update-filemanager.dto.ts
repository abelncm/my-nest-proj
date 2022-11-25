import { IsString } from "class-validator";

export class UpdateFilemanagerDto {

    @IsString()
    content: string
}
