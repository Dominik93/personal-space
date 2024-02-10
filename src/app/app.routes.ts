import { Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { AdministrationComponent } from './administration/administration.component';
import { environment } from '../environments/environment.development';



export const routes: Routes = [
    {
        path: "administration",
        canActivate: [()=> environment.administration],
        component: AdministrationComponent
    },
    {
        path: "",
        component: BrowserComponent
    },
    {
        path: "browser",
        component: BrowserComponent
    }
];
