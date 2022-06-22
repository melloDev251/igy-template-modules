import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextareaComponent implements OnInit {
    private fb;
    /** placeholder du composant */
    placeholder: string;
    /** class du composant */
    customClass: string;
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "igy-textarea", never, { "placeholder": "placeholder"; "customClass": "customClass"; "form": "form"; }, {}, never, never>;
}
