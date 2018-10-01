import { FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
export declare class FormcontrolInputComponent {
    adminService: AdminService;
    form: FormGroup;
    field: string;
    displayName: string;
    inputType: string;
    constructor(adminService: AdminService);
    updateFormValue(formControlValue: any): void;
}
