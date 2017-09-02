//Importamos ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Router, RouterModule} from '@angular/router';
import { CookieModule } from 'ngx-cookie';
//Importamos el Componente Principal
import { AppComponent } from './app.component';
//Importamos las rutas
import {routing, appRoutingProviders } from './app.routing';
//Importamos nuestros Componentes
import {IndexComponent} from './component/index.component';
import {LoginComponent} from './component/login.component';
import {RegistroComponent} from './component/registro.component';
import {HomeComponent} from './component/home.component';
import {HeaderComponent} from './component/header.component';
import {FooterComponent} from './component/footer.component';
import {RecargasComponent} from './component/recargas.component';
import { SalirComponent } from './component/salir.component';


 @NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecargasComponent,
    SalirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CookieModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
