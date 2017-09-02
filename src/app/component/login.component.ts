import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {PeticionService } from '../service/petision.service';

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  providers		: [PeticionService]
})
export class LoginComponent {
	tel:String;
	pin:String;
	usuario: Imensaje;
	constructor(private peticionService: PeticionService, private router: Router, private _cookieService:CookieService){
		this.tel = "";
		this.pin = null;
	}
	login(){
		this.peticionService.setLogin(this.tel, this.pin).subscribe(rest =>{
			this.usuario = rest;
			if (this.usuario.mensaje = "Acceso exitoso!") {
				this._cookieService.put('token', this.usuario.token);
				this.router.navigateByUrl('home');
			}
		},(err)=>{
			alert("Error, ve la consola");
			console.log(err);
		});
	}
	recuperar(){
		this.peticionService.setCambioNip(this.tel).subscribe(rest =>{
			console.log(rest);
		});
	}
}
interface Imensaje{
	mensaje: string;
	token: string;
	campo: string;
}