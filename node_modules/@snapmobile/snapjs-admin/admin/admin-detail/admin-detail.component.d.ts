import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import 'rxjs/add/operator/switchMap';
export declare class AdminDetailComponent implements OnInit {
    private route;
    private router;
    adminService: AdminService;
    object: any;
    constructor(route: ActivatedRoute, router: Router, adminService: AdminService);
    ngOnInit(): void;
    deleteItem(object: any): void;
}
