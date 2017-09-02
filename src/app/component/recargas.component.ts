import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {PeticionService } from '../service/petision.service';
@Component({
  selector: 'app-recargas',
  templateUrl: '../view/recargas.component.html',
  providers		: [PeticionService]
})
export class RecargasComponent {
	recarga : number = 50;
	constructor(private peticionService: PeticionService, private router: Router, private _cookieService:CookieService){
		this.peticionService.getPublicToken(this._cookieService.get("token"));
	}
	recargar(){
		this.peticionService.setRecarga(this.recarga).subscribe(rest => {
			alert("Referencia oxxoPay:"+rest.referencia);
			this.router.navigateByUrl('home');
		});
	}
}
