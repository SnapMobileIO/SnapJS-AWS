import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';
export declare class ControlErrorsComponent {
    validationService: ValidationService;
    control: FormControl;
    constructor(validationService: ValidationService);
    errorMessage(): any;
}
