import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { AuthLogoComponent } from './auth-logo/auth-logo.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './admin-layout/header/header.component';
import { SidenavComponent } from './admin-layout/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
export class LayoutsModule {
}
LayoutsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LayoutsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LayoutsModule, declarations: [AuthentificationComponent,
        FormLayoutComponent,
        AuthLogoComponent,
        AdminLayoutComponent,
        CardLayoutComponent,
        TabsLayoutComponent,
        HeaderComponent,
        SidenavComponent], imports: [CommonModule,
        HttpClientModule,
        SharedModuleModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule], exports: [AuthentificationComponent,
        FormLayoutComponent,
        AuthLogoComponent,
        AdminLayoutComponent,
        CardLayoutComponent,
        TabsLayoutComponent,
        HeaderComponent,
        SidenavComponent] });
LayoutsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LayoutsModule, imports: [[
            CommonModule,
            HttpClientModule,
            SharedModuleModule,
            ReactiveFormsModule,
            FormsModule,
            RouterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LayoutsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthentificationComponent,
                        FormLayoutComponent,
                        AuthLogoComponent,
                        AdminLayoutComponent,
                        CardLayoutComponent,
                        TabsLayoutComponent,
                        HeaderComponent,
                        SidenavComponent,
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        SharedModuleModule,
                        ReactiveFormsModule,
                        FormsModule,
                        RouterModule
                    ],
                    exports: [
                        AuthentificationComponent,
                        FormLayoutComponent,
                        AuthLogoComponent,
                        AdminLayoutComponent,
                        CardLayoutComponent,
                        TabsLayoutComponent,
                        HeaderComponent,
                        SidenavComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9sYXlvdXRzL2xheW91dHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWdDL0MsTUFBTSxPQUFPLGFBQWE7OzJHQUFiLGFBQWE7NEdBQWIsYUFBYSxpQkE1QnRCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0IsYUFHaEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZLGFBR1oseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjs0R0FHUCxhQUFhLFlBbkJmO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxZQUFZO1NBQ2I7NEZBWVUsYUFBYTtrQkE5QnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWxheW91dC9mb3JtLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vYXV0aC1sb2dvL2F1dGgtbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBZG1pbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGVNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQtbW9kdWxlL3NoYXJlZC1tb2R1bGUubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FyZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1sYXlvdXQvY2FyZC1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFic0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vdGFicy1sYXlvdXQvdGFicy1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICBGb3JtTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQXV0aExvZ29Db21wb25lbnQsXHJcbiAgICBBZG1pbkxheW91dENvbXBvbmVudCxcclxuICAgIENhcmRMYXlvdXRDb21wb25lbnQsXHJcbiAgICBUYWJzTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgU2lkZW5hdkNvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGVNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICBGb3JtTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQXV0aExvZ29Db21wb25lbnQsXHJcbiAgICBBZG1pbkxheW91dENvbXBvbmVudCxcclxuICAgIENhcmRMYXlvdXRDb21wb25lbnQsXHJcbiAgICBUYWJzTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgU2lkZW5hdkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRzTW9kdWxlIHt9XHJcbiJdfQ==