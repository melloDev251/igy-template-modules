import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface itemMenus {
    router: string;
    icone: string;
    name: string;
    asSubnav: SubNavMenus[];
}
export interface SubNavMenus {
    router: string;
    icone: string;
    name: string;
}
export declare class SidenavComponent implements OnInit {
    logo: string;
    GetItemMenus: itemMenus[];
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavComponent, "igy-sidenav", never, { "logo": "logo"; "GetItemMenus": "GetItemMenus"; }, {}, never, never>;
}
