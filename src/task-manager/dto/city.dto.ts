import { IsString } from "class-validator";

export class CityDto {

    @IsString()
    private name: string;

    getName() {
        return this.name;
    }
    
}
