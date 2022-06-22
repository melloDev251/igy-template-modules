import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import * as i0 from "@angular/core";
export declare class UploadFileComponent implements OnInit {
    private uploadService;
    showVisuelImg: boolean;
    withIcon: boolean;
    selectedFiles?: FileList;
    selectedFileNames: string[];
    progressInfos: any[];
    message: string[];
    previews: string[];
    imageInfos?: Observable<any>;
    imageUrl: string;
    constructor(uploadService: FileUploadService);
    ngOnInit(): void;
    selectFiles(event: any): void;
    upload(idx: number, file: File): void;
    uploadFiles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadFileComponent, "igy-upload-file", never, { "showVisuelImg": "showVisuelImg"; "withIcon": "withIcon"; }, {}, never, never>;
}
