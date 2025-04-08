import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Pages/Dashboard/main-page/main-page.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: 'dashboard', component: MainPageComponent },
    { path: '**', component: NotFoundComponent }
];
