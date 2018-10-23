import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
},
{
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent },
      { path: 'signin', component: SignupComponent }
    ]
}
];
