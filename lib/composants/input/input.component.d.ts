import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent {
    private fb;
    constructor(fb: FormBuilder);
    /** type du composant */
    type: string;
    /** placeholder du composant */
    placeholder: string;
    /** autocomplete du composant */
    autocomplete: string;
    /** class du composant */
    /**  => customClass = 'no-animate-label' si pas d'annimation */
    customClass: string;
    inputName: string;
    /** nom du composant */
    form: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "igy-input", never, { "type": "type"; "placeholder": "placeholder"; "autocomplete": "autocomplete"; "customClass": "customClass"; "inputName": "inputName"; "form": "form"; }, {}, never, never>;
}
