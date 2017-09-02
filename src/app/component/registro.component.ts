import { Component } from '@angular/core';
import {PeticionService } from '../service/petision.service';
@Component({
  selector		: 'app-registro',
  templateUrl	: '../view/registro.component.html',
  providers		: [PeticionService]
})
export class RegistroComponent {
	nombre:String;
	apellido:String;
	tel:String;
	email:String;
	pw:String;
	constructor(private peticionService: PeticionService){
		this.nombre = "";
		this.apellido = "";
		this.tel = "";
		this.email = "";
		this.pw = "";
	}
	registrar(){
		this.peticionService.setRegistro(this.nombre,this.apellido, this.tel, this.email, this.pw).subscribe(rest =>{
			console.log(rest);
		});
	}
}