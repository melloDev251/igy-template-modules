import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    /** Type du bouton */
    type: string;
    /** class du bouton */
    class: string;
    /** Libellé du bouton */
    libelle: string;
    /** Pour désactiver le bouton */
    actif: boolean;
    /** Pour afficher ou cacher le bouton */
    affiche: boolean;
    /** Pour afficher ou cacher les icones */
    icone: any;
    icon: string;
    /** Déclaration événement sur click */
    e_click: EventEmitter<any>;
    /**
     * Ajout de class pour les icons
     */
    iconClass: string;
    /**
     * Evénements sur click
     */
    proc_click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "igy-button", never, { "type": "type"; "class": "class"; "libelle": "libelle"; "actif": "actif"; "affiche": "affiche"; "icone": "icone"; "icon": "icon"; "iconClass": "iconClass"; }, { "e_click": "e_click"; }, never, never>;
}
