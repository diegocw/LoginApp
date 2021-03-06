import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginpageComponent } from './componentes/loginpage/loginpage.component';
import { PrivadopageComponent } from './componentes/privadopage/privadopage.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import {FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

// import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

import { AuthService } from './servicios/auth.service';

import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginpageComponent,
    PrivadopageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
