import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ConstantsService } from '../../constants.service';
export declare class FileDropComponent implements OnInit {
    private formBuilder;
    private changeDetectorRef;
    private constants;
    file: any;
    change: EventEmitter<any>;
    errorMessage: string;
    uploader: FileUploader;
    hasBaseDropZoneOver: boolean;
    dropDisabled: boolean;
    constructor(formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef, constants: ConstantsService);
    ngOnInit(): void;
    fileOverBase(e: any): void;
}
