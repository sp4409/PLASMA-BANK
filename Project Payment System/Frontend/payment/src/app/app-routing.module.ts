import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '' , redirectTo: '/login', pathMatch: 'full'},
  // {path: '**' , component: NotFoundComponent},
  {path: 'loggedin' , component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
