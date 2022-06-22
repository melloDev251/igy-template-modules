import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    /** valeur checker ou non */
    e_checked: boolean;
    /** couleur du checkbox */
    color: string;
    /** class personnalisé */
    class: string;
    /** évènement change */
    _change: EventEmitter<boolean>;
    /** label a afficher */
    label: string;
    someComplete(): boolean;
    setAll(completed: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "igy-checkbox", never, { "e_checked": "e_checked"; "color": "color"; "class": "class"; "label": "label"; }, { "_change": "_change"; }, never, never>;
}
