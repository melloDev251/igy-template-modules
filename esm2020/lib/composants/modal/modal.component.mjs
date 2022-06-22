import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./modal.service";
import * as i2 from "@angular/common";
export class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.id = '';
        this.options = 'dialog';
        this.title = 'Modal title';
        this.element = el.nativeElement;
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (el) => {
            if (el.target.className === 'igy-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('igy-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('igy-modal-open');
    }
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ModalComponent, deps: [{ token: i1.ModalService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ModalComponent, selector: "igy-modal", inputs: { id: "id", options: "options", title: "title" }, ngImport: i0, template: "<div class=\"igy-modal\" [ngClass]=\"options\">\r\n    <div class=\"igy-modal-body\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">{{title}}</h5>\r\n            <button type=\"button\" class=\"btn-close\" (click)=\"close()\"></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Annuler</button>\r\n            <button type=\"button\" class=\"btn btn-primary\">Valider</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"igy-modal-background\"></div>", styles: [".igy-modal-background{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;opacity:.75;z-index:900}.igy-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}.igy-modal .igy-modal-body{padding:0 20px;background:#fff;margin:40px}.igy-modal.dialog .igy-modal-body{margin:40px 35%}:host{display:none}\n"], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-modal', template: "<div class=\"igy-modal\" [ngClass]=\"options\">\r\n    <div class=\"igy-modal-body\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">{{title}}</h5>\r\n            <button type=\"button\" class=\"btn-close\" (click)=\"close()\"></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Annuler</button>\r\n            <button type=\"button\" class=\"btn btn-primary\">Valider</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"igy-modal-background\"></div>", styles: [".igy-modal-background{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;opacity:.75;z-index:900}.igy-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}.igy-modal .igy-modal-body{padding:0 20px;background:#fff;margin:40px}.igy-modal.dialog .igy-modal-body{margin:40px 35%}:host{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ModalService }, { type: i0.ElementRef }]; }, propDecorators: { id: [{
                type: Input
            }], options: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaWd5LXRlbXBsYXRlcy1tb2R1bGVzL3NyYy9saWIvY29tcG9zYW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7OztBQVFoRixNQUFNLE9BQU8sY0FBYztJQU96QixZQUFvQixZQUEwQixFQUFVLEVBQWM7UUFBbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTDdELE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFXLFFBQVEsQ0FBQztRQUMzQixVQUFLLEdBQVcsYUFBYSxDQUFDO1FBSW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxRQUFRO1FBQ04sNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDVjtRQUVELG9HQUFvRztRQUNwRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBdUMsRUFBRSxFQUFFO1lBQy9FLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILDBGQUEwRjtRQUMxRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYTtJQUNiLElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxjQUFjO0lBQ2QsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7NEdBL0NVLGNBQWM7Z0dBQWQsY0FBYywyR0NSM0IsNnJCQWV3Qzs0RkRQM0IsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzRIQU1aLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaWd5LW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IHN0cmluZyA9ICdkaWFsb2cnO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnTW9kYWwgdGl0bGUnO1xyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSh0aGlzLmlkKTtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gZW5zdXJlIGlkIGF0dHJpYnV0ZSBleGlzdHNcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ21vZGFsIG11c3QgaGF2ZSBhbiBpZCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZlIGVsZW1lbnQgdG8gYm90dG9tIG9mIHBhZ2UgKGp1c3QgYmVmb3JlIDwvYm9keT4pIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgYWJvdmUgZXZlcnl0aGluZyBlbHNlXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgLy8gY2xvc2UgbW9kYWwgb24gYmFja2dyb3VuZCBjbGlja1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsOiB7IHRhcmdldDogeyBjbGFzc05hbWU6IHN0cmluZzsgfTsgfSkgPT4ge1xyXG4gICAgICAgIGlmIChlbC50YXJnZXQuY2xhc3NOYW1lID09PSAnaWd5LW1vZGFsJykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIHNlbGYgKHRoaXMgbW9kYWwgaW5zdGFuY2UpIHRvIHRoZSBtb2RhbCBzZXJ2aWNlIHNvIGl0J3MgYWNjZXNzaWJsZSBmcm9tIGNvbnRyb2xsZXJzXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5hZGQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBvcGVuIG1vZGFsXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2lneS1tb2RhbC1vcGVuJyk7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZSBtb2RhbFxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpZ3ktbW9kYWwtb3BlbicpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImlneS1tb2RhbFwiIFtuZ0NsYXNzXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpZ3ktbW9kYWwtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g1PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZSgpXCI+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImlneS1tb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+Il19