import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import {PeticionService } from '../service/petision.service';
@Component({
  selector		: 'app-home',
  templateUrl	: '../view/home.component.html',
  providers		: [PeticionService]
})
export class HomeComponent {
	nombre : string = "";
	apellidos: string = "";
	email : string = "";
	telefono : string = "";
	calificacion : string = "";
	fecha : string = "";
	rfc : string = "";
	saldo : string = "0.0";
	constructor(private peticionService: PeticionService, private _cookieService:CookieService){
		this.peticionService.getPublicToken(this.getCookie("token"));
		this.peticionService.setClienteInformacion().subscribe(rest =>{
			this.nombre = rest.nombre;
			this.apellidos = rest.apellidos;
			this.email = rest.email;
			this.telefono = rest.telefono;
			this.calificacion = rest.calificacion;
			this.fecha = rest.fecha;
			this.rfc = rest.rfc;
		});
		this.peticionService.setSaldo().subscribe(rest => {
			this.saldo = rest.saldo;
		});
	}
	getCookie(key: string){
		return this._cookieService.get(key);
	}
}
