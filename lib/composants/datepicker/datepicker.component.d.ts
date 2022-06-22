import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatepickerComponent {
    constructor();
    /** label pour le composant */
    dateLabel: string;
    /** positionnement de l'icone par rapport à l'input du date picker ?true suffix: false prefix */
    iconDatePickerPosition: boolean;
    /** class du composant */
    /**  => customClass = 'no-animate-label' si pas d'annimation */
    customClass: string;
    sendDateChoosen: EventEmitter<any>;
    onChange(event: {
        target: {
            value: any;
        };
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerComponent, "igy-datepicker", never, { "dateLabel": "dateLabel"; "iconDatePickerPosition": "iconDatePickerPosition"; "customClass": "customClass"; }, { "sendDateChoosen": "sendDateChoosen"; }, never, never>;
}
