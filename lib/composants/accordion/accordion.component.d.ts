import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements OnInit {
    panelOpenState: boolean;
    customClass: string;
    datas: any;
    constructor();
    titleTemplateRef: TemplateRef<any> | undefined;
    descriptionTemplateRef: TemplateRef<any> | undefined;
    contentTemplateRef: TemplateRef<any> | undefined;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "igy-accordion", never, { "customClass": "customClass"; "datas": "datas"; }, {}, ["titleTemplateRef", "descriptionTemplateRef", "contentTemplateRef"], never>;
}
