import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        this.modals.push(modal);
    }
    remove(id) {
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lneS10ZW1wbGF0ZXMtbW9kdWxlcy9zcmMvbGliL2NvbXBvc2FudHMvbW9kYWwvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUVZLFdBQU0sR0FBVSxFQUFFLENBQUM7S0FtQjlCO0lBakJHLEdBQUcsQ0FBQyxLQUFVO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFVO1FBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBVTtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7MEdBbkJRLFlBQVk7OEdBQVosWUFBWSxjQURDLE1BQU07NEZBQ25CLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG1vZGFsczogYW55W10gPSBbXTtcclxuXHJcbiAgICBhZGQobW9kYWw6IGFueSkge1xyXG4gICAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgICB0aGlzLm1vZGFscyA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgIT09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGlkOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFscy5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG4gICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoaWQ6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxzLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcbiAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19