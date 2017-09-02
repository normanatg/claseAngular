//Importamos ANGULAR
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
//Importamos Nuestros Modulos
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index.component';
import { HomeComponent } from './component/home.component';
import { RecargasComponent } from './component/recargas.component';
import { SalirComponent } from './component/salir.component';
//Creamos las Rutas
const appRouter: Routes = [
	{path: '', redirectTo: '/index', pathMatch:'full'},
	{path: 'index', component:IndexComponent},
	{path: 'home', component:HomeComponent},
	{path: 'recargas', component:RecargasComponent},
	{path: 'salir', component:SalirComponent}
];
//Exportaciones
export const appRoutingProviders: any =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);