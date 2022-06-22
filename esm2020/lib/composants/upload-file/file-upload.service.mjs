import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FileUploadService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    upload(file) {
        const formData = new FormData();
        formData.append('file', file);
        const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
            reportProgress: true,
            responseType: 'json',
        });
        return this.http.request(req);
    }
    getFiles() {
        return this.http.get(`${this.baseUrl}/files`);
    }
}
FileUploadService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FileUploadService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lneS10ZW1wbGF0ZXMtbW9kdWxlcy9zcmMvbGliL2NvbXBvc2FudHMvdXBsb2FkLWZpbGUvZmlsZS11cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTTFFLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixZQUFPLEdBQUcsdUJBQXVCLENBQUM7SUFFSCxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxJQUFVO1FBQ2YsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsUUFBUSxFQUFFO1lBQ3RFLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7K0dBakJVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICB1cGxvYWQoZmlsZTogRmlsZSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCBgJHt0aGlzLmJhc2VVcmx9L3VwbG9hZGAsIGZvcm1EYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWxlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9maWxlc2ApO1xyXG4gIH1cclxufVxyXG4iXX0=