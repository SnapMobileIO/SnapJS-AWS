import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class FormcontrolArrayRelComponent implements OnInit {
    private formBuilder;
    form: FormGroup;
    object: {};
    field: string;
    displayName: string;
    schema: any;
    disabled: boolean;
    schemaKeys: any[];
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    initItem(item?: any): FormGroup;
    addItem(item?: any): void;
    removeItem(i: number): void;
    getInputType(key: string): "checkbox" | "datetime-local" | "number" | "text";
    updateFormValue(formControlValue: boolean, formControlName: string, inputType: string, index: number): void;
}
