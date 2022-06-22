import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit, OnDestroy {
    private modalService;
    private el;
    id: string;
    options: string;
    title: string;
    private element;
    constructor(modalService: ModalService, el: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "igy-modal", never, { "id": "id"; "options": "options"; "title": "title"; }, {}, never, ["*"]>;
}
