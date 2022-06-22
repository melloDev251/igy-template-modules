import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface ExampleTab {
    label: string;
    content: string;
}
export declare class TabsLayoutComponent implements OnInit {
    data_tabs: any;
    constructor();
    titleTemplateRef: TemplateRef<any> | undefined;
    descriptionTemplateRef: TemplateRef<any> | undefined;
    contentTemplateRef: TemplateRef<any> | undefined;
    isTable(tab: any): boolean;
    isForm(tab: any): boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsLayoutComponent, "igy-tabs-layout", never, { "data_tabs": "data_tabs"; }, {}, ["titleTemplateRef", "descriptionTemplateRef", "contentTemplateRef"], never>;
}
