import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AdminService } from '../admin.service';
import { ValidationService } from '../shared/control-errors/validation.service';
import 'rxjs/add/operator/switchMap';
export declare class AdminEditComponent implements OnInit {
    private route;
    private router;
    private toastr;
    adminService: AdminService;
    private validationService;
    object: any;
    submitFunction: Function;
    constructor(route: ActivatedRoute, router: Router, toastr: ToastsManager, adminService: AdminService, validationService: ValidationService);
    ngOnInit(): void;
    submit(form: FormGroup): void;
}
