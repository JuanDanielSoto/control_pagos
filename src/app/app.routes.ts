import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Pages/Dashboard/main-page/main-page.component';

export const routes: Routes = [
    //{ path: 'login', component: LoginComponent },
    { path: 'dashboard', component: MainPageComponent },
    { path: '**', redirectTo: 'dashboard' }
];
