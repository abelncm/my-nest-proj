// import { createMap, Mapper } from "@automapper/core";
// import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
// import { Injectable } from "@nestjs/common";
// import { ExampleDto } from "../dtos/example.dto";
// import { Person } from "../entities/person.entity";


// @Injectable()
// export class ExampleProfile extends AutomapperProfile {
//     constructor(@InjectMapper() mapper: Mapper) {
//         super(mapper);
//     }

//     override get profile() {
//         return (mapper) => {
//             createMap(mapper, Person, ExampleDto);
//         };
//     }
// }