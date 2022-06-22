import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormLayoutComponent implements OnInit {
    form: FormGroup;
    /**event submit */
    submit: EventEmitter<any>;
    /** Class formulaire */
    mainClass: string;
    constructor();
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormLayoutComponent, "igy-form-layout", never, { "form": "form"; "mainClass": "mainClass"; }, { "submit": "submit"; }, never, ["*"]>;
}
