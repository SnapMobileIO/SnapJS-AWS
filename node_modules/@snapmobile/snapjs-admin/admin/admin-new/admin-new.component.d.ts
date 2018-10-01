import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AdminService } from '../admin.service';
import { ValidationService } from '../shared/control-errors/validation.service';
export declare class AdminNewComponent implements OnInit {
    private router;
    private route;
    private toastr;
    adminService: AdminService;
    private validationService;
    object: {};
    submitFunction: Function;
    constructor(router: Router, route: ActivatedRoute, toastr: ToastsManager, adminService: AdminService, validationService: ValidationService);
    ngOnInit(): void;
    submit(form: FormGroup): void;
}
