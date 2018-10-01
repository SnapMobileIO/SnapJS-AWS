import { ConstantsService } from '../constants.service';
export declare class AdminLayoutComponent {
    constants: ConstantsService;
    isCollapsed: boolean;
    constructor(constants: ConstantsService);
    isLoggedIn(): boolean;
}
