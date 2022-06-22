import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
import * as i2 from "@angular/common";
export class RadioComponent {
    constructor() {
        /** couleur du btn radio **/
        this.color = 'primary';
        /** affiche le label ou non */
        this.hasLabel = false;
        /** valeur du label  */
        this.label = 'Label';
        /** liste de contenu de type RadioItems */
        this.items = [];
        /** évènenment change */
        this._change = new EventEmitter();
    }
    ngOnInit() { }
    selectValue(value) {
        this._change.emit(value);
    }
}
RadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RadioComponent, selector: "igy-radio", inputs: { color: "color", hasLabel: "hasLabel", label: "label", items: "items" }, outputs: { _change: "_change" }, ngImport: i0, template: "<section class=\"radio-option\">\r\n  <label *ngIf=\"hasLabel\">{{ label }}:</label>\r\n  <mat-radio-group>\r\n    <mat-radio-button\r\n      [color]=\"color\"\r\n      value=\"{{ item.value }}\"\r\n      *ngFor=\"let item of items\"\r\n      (change)=\"selectValue($event.value)\"\r\n    >\r\n      {{ item.title }}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</section>\r\n", styles: [".radio-option{padding-bottom:1em}.radio-option>label{display:block}.radio-option .mat-radio-group .mat-radio-button{margin-right:15px}\n"], components: [{ type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-radio', template: "<section class=\"radio-option\">\r\n  <label *ngIf=\"hasLabel\">{{ label }}:</label>\r\n  <mat-radio-group>\r\n    <mat-radio-button\r\n      [color]=\"color\"\r\n      value=\"{{ item.value }}\"\r\n      *ngFor=\"let item of items\"\r\n      (change)=\"selectValue($event.value)\"\r\n    >\r\n      {{ item.title }}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</section>\r\n", styles: [".radio-option{padding-bottom:1em}.radio-option>label{display:block}.radio-option .mat-radio-group .mat-radio-button{margin-right:15px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], hasLabel: [{
                type: Input
            }], label: [{
                type: Input
            }], items: [{
                type: Input
            }], _change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaWd5LXRlbXBsYXRlcy1tb2R1bGVzL3NyYy9saWIvY29tcG9zYW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFjL0UsTUFBTSxPQUFPLGNBQWM7SUFnQnpCO1FBZkEsNEJBQTRCO1FBQ25CLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBRXpDLDhCQUE4QjtRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRW5DLHVCQUF1QjtRQUNkLFVBQUssR0FBVyxPQUFPLENBQUM7UUFFakMsMENBQTBDO1FBQ2pDLFVBQUssR0FBaUIsRUFBRSxDQUFDO1FBRWxDLHdCQUF3QjtRQUNkLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRWpDLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7SUFFbkIsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7NEdBdEJVLGNBQWM7Z0dBQWQsY0FBYyxvS0NkM0IsbVlBYUE7NEZEQ2EsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzBFQU1aLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvSXRlbXMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lneS1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKiBjb3VsZXVyIGR1IGJ0biByYWRpbyAqKi9cclxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xyXG5cclxuICAvKiogYWZmaWNoZSBsZSBsYWJlbCBvdSBub24gKi9cclxuICBASW5wdXQoKSBoYXNMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogdmFsZXVyIGR1IGxhYmVsICAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnTGFiZWwnO1xyXG5cclxuICAvKiogbGlzdGUgZGUgY29udGVudSBkZSB0eXBlIFJhZGlvSXRlbXMgKi9cclxuICBASW5wdXQoKSBpdGVtczogUmFkaW9JdGVtc1tdID0gW107XHJcblxyXG4gIC8qKiDDqXbDqG5lbm1lbnQgY2hhbmdlICovXHJcbiAgQE91dHB1dCgpIF9jaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBzZWxlY3RWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwicmFkaW8tb3B0aW9uXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwiaGFzTGFiZWxcIj57eyBsYWJlbCB9fTo8L2xhYmVsPlxyXG4gIDxtYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICA8bWF0LXJhZGlvLWJ1dHRvblxyXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICB2YWx1ZT1cInt7IGl0ZW0udmFsdWUgfX1cIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXHJcbiAgICAgIChjaGFuZ2UpPVwic2VsZWN0VmFsdWUoJGV2ZW50LnZhbHVlKVwiXHJcbiAgICA+XHJcbiAgICAgIHt7IGl0ZW0udGl0bGUgfX1cclxuICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICA8L21hdC1yYWRpby1ncm91cD5cclxuPC9zZWN0aW9uPlxyXG4iXX0=