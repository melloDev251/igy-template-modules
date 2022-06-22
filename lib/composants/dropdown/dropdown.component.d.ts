import { EventEmitter } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    /**label menu */
    title: string;
    /** class du boutton */
    class: string;
    /** items liste */
    listmenu: {
        iconName: string;
        labelItem: string;
        disabled: boolean;
    }[];
    /** position d'ouverture du menu */
    xPosition: MenuPositionX;
    yPosition: MenuPositionY;
    /** Déclaration evenement sur clique */
    e_click: EventEmitter<any>;
    /**
     * Evenement sur clique
     */
    on_click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "igy-dropdown", never, { "title": "title"; "class": "class"; "listmenu": "listmenu"; "xPosition": "xPosition"; "yPosition": "yPosition"; }, { "e_click": "e_click"; }, never, never>;
}
