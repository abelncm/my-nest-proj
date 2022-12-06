import { ApiProperty } from "@nestjs/swagger";

export class ApiResponse {

    @ApiProperty()
    message: string;
    
    @ApiProperty()
    data: Object;

    constructor(message:string, data:Object = null) {
        this.message=message;
        this.data = data;
    }

}