import { FormControl } from '@angular/forms';
export declare class ValidationService {
    buildServerErrors(form: any, errors: any): void;
    getValidatorErrorMessage(validatorName: string, validatorValue?: any): any;
    creditCardValidator(control: FormControl): {
        'invalidCreditCard': boolean;
    };
    emailValidator(control: FormControl): {
        'invalidEmailAddress': boolean;
    };
    passwordValidator(control: FormControl): {
        'invalidPassword': boolean;
    };
}
