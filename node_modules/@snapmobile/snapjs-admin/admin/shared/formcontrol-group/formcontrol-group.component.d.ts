import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class FormcontrolGroupComponent implements OnInit {
    private formBuilder;
    form: FormGroup;
    field: string;
    displayName: string;
    schema: any;
    disabled: boolean;
    schemaKeys: any[];
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
}
