import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class StepperComponent implements OnInit {
    private _formBuilder;
    /** la valeur est editable ou non */
    isEditable: boolean;
    /** liste de donnée afficher dans le stepper */
    data: any[];
    /** contenu utilisé dans ngClass */
    class: string;
    /** clé pour chaque valeur dans data */
    keys: string[];
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperComponent, "igy-stepper", never, { "isEditable": "isEditable"; "data": "data"; "class": "class"; }, {}, never, never>;
}
