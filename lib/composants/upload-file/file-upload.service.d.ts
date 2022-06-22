import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FileUploadService {
    private http;
    private baseUrl;
    constructor(http: HttpClient);
    upload(file: File): Observable<HttpEvent<any>>;
    getFiles(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileUploadService>;
}
