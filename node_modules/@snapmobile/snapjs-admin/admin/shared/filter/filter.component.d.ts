import { FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { FilterService } from './filter.service';
export declare class FilterComponent {
    adminService: AdminService;
    filterService: FilterService;
    filters: any[];
    schema: any;
    findAll: Function;
    itemsPerPage: number;
    skip: number;
    sort: string;
    form: FormGroup;
    query: any;
    constructor(adminService: AdminService, filterService: FilterService);
    addFilters(): void;
    findAllWithFilters(): void;
    resetFilters(): void;
    clearFilters(): void;
    combineDateTime(filter: any): void;
}
