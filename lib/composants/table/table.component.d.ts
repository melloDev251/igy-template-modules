import { OnInit, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import * as i0 from "@angular/core";
export interface EnteteData {
    libelle: string;
    propertyname: string;
}
declare type BtnFunction = (value: any) => void;
declare type radioOrCheckbox = 'radio' | 'checkbox' | undefined;
export interface translate {
    itemsPerPageLabel: string;
    nextPageLabel: string;
    previousPageLabel: string;
    firstPageLabel: string;
    lastPageLabel: string;
}
export interface BtnAction {
    action: BtnFunction;
    class: string;
    color: ThemePalette;
    iconName: string;
    istext: boolean;
}
export declare class TableComponent implements OnInit {
    paginator: MatPaginator;
    /** données a afficher sur la table */
    data: any[] | undefined;
    /** pagination affiche l bouton debut/fin   */
    showFirstLastButtons: boolean;
    /** pagination valeur contenu par page   */
    pageSizeOptions: number[];
    /** total des données  */
    totalData: number;
    /** taille de la page   */
    pageSize: number;
    /** index de la page   */
    pageIndex: number;
    /** header afficher parmis le contenu de data */
    header: EnteteData[];
    /**liste des bouton */
    listbtn: BtnAction[];
    /** nom header pour les bouton*/
    libelleActionBtn: string;
    /** évènenment sort */
    _sort: EventEmitter<boolean>;
    /** évènenment paginator */
    _pageEvent: EventEmitter<boolean>;
    /** choix utiliser entre checkbox ou radio btn */
    checkboxOrRadio: radioOrCheckbox;
    /** couleur utilisé sur checkbox ou radio btn */
    checkboxColor: ThemePalette;
    /** évènenment radiobtn select element */
    selectvalue: EventEmitter<boolean>;
    hasPaginator: boolean;
    hasStatus: string;
    classSatuts: string;
    /** évènenment Action click */
    ClickEventValue: EventEmitter<boolean>;
    /** text pour la langue */
    language: translate;
    headerColumn: any[];
    dataSource: MatTableDataSource<any>;
    sort: MatSort;
    selection: SelectionModel<any>;
    radioSelected: Object;
    ngAfterViewInit(): void;
    constructor();
    ngOnInit(): void;
    initContenu(): void;
    /** initialisation affichage langue et pagination */
    initTextPagination(): void;
    /** redefinition de getRangeLabel dans paginator */
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
    /** sort data */
    sortChange(sortState: Sort | any): void;
    /** event paginate */
    pageEvent(event: any): void;
    /** Indique si le nombre d'éléments sélectionnés correspond au nombre total de lignes.
     */
    isAllSelected(): boolean;
    /** Selectionne tous les ligne si il ne sont pas tous selectionner; sinon deselectionne touts */
    masterToggle(): void;
    /** Le libellé de la case à cocher sur la ligne transmise */
    checkboxLabel(row?: any): string;
    /** retourn la liste selectionner */
    selectRow(value: any): void;
    /** test header action libelle */
    isAction(item: string): boolean;
    /** test header select libelle */
    isSelect(item: any): boolean;
    /** test si checkbox utilisé ou false radio */
    isCheckbox(): boolean;
    /** selection element sur click de la ligne */
    checkLine(row: any, index: number): void;
    EventClickBtn(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "igy-table", never, { "data": "data"; "showFirstLastButtons": "showFirstLastButtons"; "pageSizeOptions": "pageSizeOptions"; "totalData": "totalData"; "pageSize": "pageSize"; "pageIndex": "pageIndex"; "header": "header"; "listbtn": "listbtn"; "libelleActionBtn": "libelleActionBtn"; "checkboxOrRadio": "checkboxOrRadio"; "checkboxColor": "checkboxColor"; "hasPaginator": "hasPaginator"; "hasStatus": "hasStatus"; "classSatuts": "classSatuts"; "language": "language"; }, { "_sort": "_sort"; "_pageEvent": "_pageEvent"; "selectvalue": "selectvalue"; "ClickEventValue": "ClickEventValue"; }, never, never>;
}
export {};
