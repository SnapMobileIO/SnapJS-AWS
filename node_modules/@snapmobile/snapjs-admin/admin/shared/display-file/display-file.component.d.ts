import { ConstantsService } from '../../constants.service';
export declare class DisplayFileComponent {
    private constants;
    files: any[];
    constructor(constants: ConstantsService);
    isImage(mimeType: string): boolean;
}
