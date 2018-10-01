export declare class FilterService {
    operators: any;
    constructor();
    buildQuery(filters: any, itemsPerPage: number, skip: number, sort: string): {
        limit: number;
        skip: number;
        sort: string;
    };
    buildFilter(field: string, operator: string, value: string): {
        field: string;
        operator: string;
        value: string;
    };
    isRelationship(field: string): boolean;
}
