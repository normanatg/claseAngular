import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { PeticionService } from '../service/petision.service';

@Component({
  selector		: 'app-salir',
  template		: 'Salir',
  providers		: [PeticionService]
})
export class SalirComponent {
	constructor(private peticionService: PeticionService, private router: Router, private _cookieService:CookieService){
		this.peticionService.getPublicToken(this._cookieService.get("token"));
		this._cookieService.remove("token");
		this.peticionService.logout().subscribe();
		this.router.navigateByUrl('index');
	}
}
