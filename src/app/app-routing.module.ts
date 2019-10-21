import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './componentes/homepage/homepage.component';
import {LoginpageComponent} from './componentes/loginpage/loginpage.component';
import {RegisterComponent} from './componentes/register/register.component';
import {PrivadopageComponent} from './componentes/privadopage/privadopage.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component'


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'privado', component: PrivadopageComponent},
  {path: '**', component: NotFoundPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
