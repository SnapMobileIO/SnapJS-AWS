import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
export declare class FormcontrolSelectRelComponent implements OnInit {
    private adminService;
    form: FormGroup;
    object: {};
    searchClass: string;
    searchField: string;
    field: string;
    displayName: string;
    multiple: boolean;
    items: {
        id: string;
        text: string;
    }[];
    active: any[];
    constructor(adminService: AdminService);
    ngOnInit(): void;
    refreshValue(data: any): void;
    selected(data: object): void;
    removed(data: object): void;
    typed(data: string): void;
    generateArray(): any[];
}
