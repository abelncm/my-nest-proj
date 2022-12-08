import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class PersonDto {

    @ApiProperty()
    @IsString()
    private firstName: string;
    
    @ApiProperty()
    @IsString()
    private lastName: string;
    
    @ApiProperty()
    @IsString()
    private phone: string;
    
    @ApiProperty()
    @IsInt()
    private cityId: number

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getPhone(): string {
        return this.phone;
    }
    public getCityId(): number {
        return this.cityId;
    }
   
}
