import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../admin.service';
export declare class AdminFormComponent implements OnInit {
    private formBuilder;
    adminService: AdminService;
    form: FormGroup;
    formSubmitted: boolean;
    schemaKeys: any[];
    object: any;
    schema: any;
    submitFunction: Function;
    constructor(formBuilder: FormBuilder, adminService: AdminService);
    ngOnInit(): void;
    submit(): void;
}
