import { IsString } from "class-validator";

export class CityDto {

    @IsString()
    name: string;

}
