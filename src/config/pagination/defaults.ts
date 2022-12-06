import { PaginateConfig } from "nestjs-paginate";

const paginateDefaults: PaginateConfig<any> = {
    sortableColumns:['id'],
    defaultSortBy: [['id', 'DESC']],
}

export default paginateDefaults;