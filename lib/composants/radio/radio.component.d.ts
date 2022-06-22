import { OnInit, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export interface RadioItems {
    id: string;
    title: string;
    value: string;
}
export declare class RadioComponent implements OnInit {
    /** couleur du btn radio **/
    color: ThemePalette;
    /** affiche le label ou non */
    hasLabel: boolean;
    /** valeur du label  */
    label: string;
    /** liste de contenu de type RadioItems */
    items: RadioItems[];
    /** évènenment change */
    _change: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    selectValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioComponent, "igy-radio", never, { "color": "color"; "hasLabel": "hasLabel"; "label": "label"; "items": "items"; }, { "_change": "_change"; }, never, never>;
}
