
export class ApiResponse {

    message: string;
    data: Object;

    constructor(message:string, data:Object = null) {
        this.message=message;
        this.data = data;
    }

}