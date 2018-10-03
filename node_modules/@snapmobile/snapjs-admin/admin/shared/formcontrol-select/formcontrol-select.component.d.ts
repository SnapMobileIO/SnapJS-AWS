import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
export declare class FormcontrolSelectComponent implements OnInit {
    private adminService;
    form: FormGroup;
    object: {};
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
    selected(data: any): void;
    removed(data: any): void;
    generateArray(): any[];
}
