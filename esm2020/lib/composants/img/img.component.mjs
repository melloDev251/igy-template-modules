import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ImgComponent {
    constructor() {
        this.images = 'undefined';
        this.label = 'undefined';
        this.class = 'undefined';
        this.caption = 'undefined';
        this.displayCaption = false;
    }
    ngOnInit() {
        console.log(this.displayCaption);
    }
}
ImgComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ImgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ImgComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ImgComponent, selector: "igy-img", inputs: { images: "images", label: "label", class: "class", caption: "caption", displayCaption: "displayCaption" }, ngImport: i0, template: "\r\n<figure>\r\n  <img [src]=\"images\" [alt]=\"label\" [ngClass]=\"class\">\r\n  <figcaption [ngClass]=\"{'d-none' : !displayCaption}\">{{caption}}</figcaption>\r\n</figure>\r\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ImgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-img', template: "\r\n<figure>\r\n  <img [src]=\"images\" [alt]=\"label\" [ngClass]=\"class\">\r\n  <figcaption [ngClass]=\"{'d-none' : !displayCaption}\">{{caption}}</figcaption>\r\n</figure>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { images: [{
                type: Input
            }], label: [{
                type: Input
            }], class: [{
                type: Input
            }], caption: [{
                type: Input
            }], displayCaption: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lneS10ZW1wbGF0ZXMtbW9kdWxlcy9zcmMvbGliL2NvbXBvc2FudHMvaW1nL2ltZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL2ltZy9pbWcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sWUFBWTtJQVF2QjtRQU5TLFdBQU0sR0FBVyxXQUFXLENBQUM7UUFDN0IsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFlBQU8sR0FBVyxXQUFXLENBQUM7UUFDOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFFekIsQ0FBQztJQUVqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7MEdBWlUsWUFBWTs4RkFBWixZQUFZLG1LQ1B6QixvTEFLQTs0RkRFYSxZQUFZO2tCQUx4QixTQUFTOytCQUNFLFNBQVM7MEVBTVYsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaWd5LWltZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1nLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nID0gJ3VuZGVmaW5lZCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICd1bmRlZmluZWQnO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAndW5kZWZpbmVkJztcclxuICBASW5wdXQoKSBjYXB0aW9uOiBzdHJpbmcgPSAndW5kZWZpbmVkJztcclxuICBASW5wdXQoKSBkaXNwbGF5Q2FwdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUNhcHRpb24pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbjxmaWd1cmU+XHJcbiAgPGltZyBbc3JjXT1cImltYWdlc1wiIFthbHRdPVwibGFiZWxcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxyXG4gIDxmaWdjYXB0aW9uIFtuZ0NsYXNzXT1cInsnZC1ub25lJyA6ICFkaXNwbGF5Q2FwdGlvbn1cIj57e2NhcHRpb259fTwvZmlnY2FwdGlvbj5cclxuPC9maWd1cmU+XHJcbiJdfQ==