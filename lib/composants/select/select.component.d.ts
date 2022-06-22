import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SelectComponent implements OnInit {
    /** liste des données dans  */
    data: any[];
    /** nom du champ a afficher sur la liste select */
    viewValue: string;
    /** label de l'element select */
    label: string;
    /** message d'erreur à afficher */
    errorMsg: string;
    /** nom select **/
    name: string;
    customClass: string;
    /** évènement selectionChange */
    change: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    selectionValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "igy-select", never, { "data": "data"; "viewValue": "viewValue"; "label": "label"; "errorMsg": "errorMsg"; "name": "name"; "customClass": "customClass"; }, { "change": "change"; }, never, never>;
}
