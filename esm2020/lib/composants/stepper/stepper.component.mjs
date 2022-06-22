import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/common";
export class StepperComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        /** la valeur est editable ou non */
        this.isEditable = false;
        /** liste de donnée afficher dans le stepper */
        this.data = [];
        /** contenu utilisé dans ngClass */
        this.class = '';
        /** clé pour chaque valeur dans data */
        this.keys = [];
    }
    ngOnInit() {
        if (this.data.length > 0) {
            this.keys = Object.keys(this.data[0]);
        }
    }
}
StepperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StepperComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
StepperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StepperComponent, selector: "igy-stepper", inputs: { isEditable: "isEditable", data: "data", class: "class" }, ngImport: i0, template: "<div class=\"stpper-container\">\r\n    <mat-stepper labelPosition=\"bottom\" [ngClass]=\"class\" #stepper>\r\n        <mat-step [editable]=\"isEditable\" *ngFor=\"let d of data\">\r\n            <ng-template matStepLabel>\r\n                <div *ngFor=\"let item of keys; let i = index\">\r\n                    <p *ngIf=\"i === 0\">{{ d[item] }}</p>\r\n                    <span *ngIf=\"i !== 0\">{{ d[item] }}</span>\r\n                </div>\r\n            </ng-template>\r\n        </mat-step>\r\n    </mat-stepper>\r\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container{margin-bottom:20px}.item-input-container .mat-form-field-wrapper{margin-bottom:-1.25em}.item-input-container input.mat-input-element,.item-input-container span.mat-select-min-line{color:#333;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:12px}.item-input-container .mat-form-field-infix{border:1px solid #8e8ea1!important;box-sizing:border-box;height:35px!important;border-radius:0;font-style:normal;font-weight:400!important;font-size:14px!important;line-height:21px!important;color:#afb2b8!important;padding-left:10px;padding-right:10px;width:100%}.item-input-container .mat-form-field-underline{display:none}.item-input-container .mat-form-field-label-wrapper{padding-top:0;top:-.8em;overflow:visible}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label.select-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}.item-input-container .mat-form-field-appearance-legacy:not(.mat-form-field-can-float.mat-form-field-should-float) .mat-form-field-label{padding-left:10px}.item-input-container .item-validation-container span{font-size:11px;color:#f96969;font-weight:600}:host ::ng-deep .mat-stepper-horizontal{background-color:inherit}:host ::ng-deep .mat-stepper-horizontal .mat-step-header{max-width:150px}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon{background-color:#919699}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-state-edit{background-color:purple}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-selected{background-color:purple}:host ::ng-deep .mat-stepper-horizontal .mat-step-header:hover:not([aria-disabled]){background-color:transparent}:host ::ng-deep .mat-stepper-horizontal .mat-step-label{padding-top:10px}:host ::ng-deep .mat-stepper-horizontal .mat-step-label .mat-step-text-label p{font-size:12px;font-weight:600;line-height:12px;white-space:break-spaces}:host ::ng-deep .mat-stepper-horizontal .mat-step-label .mat-step-text-label span{font-size:12px;font-weight:300;line-height:12px}:host ::ng-deep .mat-horizontal-content-container{display:none}.stpper-container{background:#F8F8F8;box-shadow:0 4px 4px #00000040}\n"], components: [{ type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.MatStepLabel, selector: "[matStepLabel]" }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-stepper', template: "<div class=\"stpper-container\">\r\n    <mat-stepper labelPosition=\"bottom\" [ngClass]=\"class\" #stepper>\r\n        <mat-step [editable]=\"isEditable\" *ngFor=\"let d of data\">\r\n            <ng-template matStepLabel>\r\n                <div *ngFor=\"let item of keys; let i = index\">\r\n                    <p *ngIf=\"i === 0\">{{ d[item] }}</p>\r\n                    <span *ngIf=\"i !== 0\">{{ d[item] }}</span>\r\n                </div>\r\n            </ng-template>\r\n        </mat-step>\r\n    </mat-stepper>\r\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container{margin-bottom:20px}.item-input-container .mat-form-field-wrapper{margin-bottom:-1.25em}.item-input-container input.mat-input-element,.item-input-container span.mat-select-min-line{color:#333;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:12px}.item-input-container .mat-form-field-infix{border:1px solid #8e8ea1!important;box-sizing:border-box;height:35px!important;border-radius:0;font-style:normal;font-weight:400!important;font-size:14px!important;line-height:21px!important;color:#afb2b8!important;padding-left:10px;padding-right:10px;width:100%}.item-input-container .mat-form-field-underline{display:none}.item-input-container .mat-form-field-label-wrapper{padding-top:0;top:-.8em;overflow:visible}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label.select-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}.item-input-container .mat-form-field-appearance-legacy:not(.mat-form-field-can-float.mat-form-field-should-float) .mat-form-field-label{padding-left:10px}.item-input-container .item-validation-container span{font-size:11px;color:#f96969;font-weight:600}:host ::ng-deep .mat-stepper-horizontal{background-color:inherit}:host ::ng-deep .mat-stepper-horizontal .mat-step-header{max-width:150px}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon{background-color:#919699}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-state-edit{background-color:purple}:host ::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-selected{background-color:purple}:host ::ng-deep .mat-stepper-horizontal .mat-step-header:hover:not([aria-disabled]){background-color:transparent}:host ::ng-deep .mat-stepper-horizontal .mat-step-label{padding-top:10px}:host ::ng-deep .mat-stepper-horizontal .mat-step-label .mat-step-text-label p{font-size:12px;font-weight:600;line-height:12px;white-space:break-spaces}:host ::ng-deep .mat-stepper-horizontal .mat-step-label .mat-step-text-label span{font-size:12px;font-weight:300;line-height:12px}:host ::ng-deep .mat-horizontal-content-container{display:none}.stpper-container{background:#F8F8F8;box-shadow:0 4px 4px #00000040}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { isEditable: [{
                type: Input
            }], data: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRekQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQixZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVo3QyxvQ0FBb0M7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVyQywrQ0FBK0M7UUFDdEMsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUUxQixtQ0FBbUM7UUFDMUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUU1Qix1Q0FBdUM7UUFDdkMsU0FBSSxHQUFhLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRWpELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OEdBbkJVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLHVIQ1I3QixxaEJBV007NEZESE8sZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLGFBQWE7a0dBTWQsVUFBVTtzQkFBbEIsS0FBSztnQkFHRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lneS1zdGVwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIGxhIHZhbGV1ciBlc3QgZWRpdGFibGUgb3Ugbm9uICovXHJcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogbGlzdGUgZGUgZG9ubsOpZSBhZmZpY2hlciBkYW5zIGxlIHN0ZXBwZXIgKi9cclxuICBASW5wdXQoKSBkYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvKiogY29udGVudSB1dGlsaXPDqSBkYW5zIG5nQ2xhc3MgKi9cclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKiBjbMOpIHBvdXIgY2hhcXVlIHZhbGV1ciBkYW5zIGRhdGEgKi9cclxuICBrZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YVswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzdHBwZXItY29udGFpbmVyXCI+XHJcbiAgICA8bWF0LXN0ZXBwZXIgbGFiZWxQb3NpdGlvbj1cImJvdHRvbVwiIFtuZ0NsYXNzXT1cImNsYXNzXCIgI3N0ZXBwZXI+XHJcbiAgICAgICAgPG1hdC1zdGVwIFtlZGl0YWJsZV09XCJpc0VkaXRhYmxlXCIgKm5nRm9yPVwibGV0IGQgb2YgZGF0YVwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBrZXlzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpID09PSAwXCI+e3sgZFtpdGVtXSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImkgIT09IDBcIj57eyBkW2l0ZW1dIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9tYXQtc3RlcD5cclxuICAgIDwvbWF0LXN0ZXBwZXI+XHJcbjwvZGl2PiJdfQ==