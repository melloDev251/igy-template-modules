import { ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ChipsComponent implements OnInit {
    separatorKeysCodes: number[];
    fruitCtrl: FormControl;
    filteredFruits: Observable<string[]>;
    fruits: string[];
    allFruits: string[];
    fruitInput: ElementRef<HTMLInputElement>;
    constructor();
    ngOnInit(): void;
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsComponent, "igy-chips", never, {}, {}, never, never>;
}
