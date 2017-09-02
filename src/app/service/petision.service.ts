//Importaciones de ANGULAR
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionService{
	servidorRest: String = "http://test.viemx.com/viePay";
	publicToken : String;
	constructor(private http: Http){
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.publicToken = currentUser && currentUser.token;
	}
	setLogin(tel:String, pin:String){
		let headers = new Headers({"Content-Type":"applicartion/json"});
		return this.http.post(this.servidorRest + '/login/',
				{
					"tel":"+52"+tel,
					"pin":pin
				},).map(response => response.json());
		}
	
	setRegistro(nombre:String, apellido:String, tel:String, email:String, pw:String){
		let headers = new Headers({"Content-Type":"application/json"});
		return this.http.post(this.servidorRest + '/persona/registro/',
			{
				"modo":0,
				"nombre":nombre,
				"apellidos":apellido,
				"tel":"+52"+tel,
				"email":email,
				"password":pw
			},{headers:headers}).map(response => response.json());
	}
	setCambioNip(tel:String){
		let headers = new Headers({"Content-Type":"application/json"});
		return this.http.post(this.servidorRest + '/persona/reNIP/',
			{
				"tel":"+52"+tel
			},{headers:headers}).map(response => response.json());
	}
	setClienteInformacion(){
		return this.http.get(this.servidorRest + '/persona/?token=' + this.publicToken).map(res=>res.json());
	}
	setSaldo(){
		let headers = new Headers({"Content-Type":"application/json"});
		return this.http.post(this.servidorRest + '/persona/saldo/',
			{
				"token":this.publicToken
			},{headers:headers}).map(response => response.json());
	}
	setRecarga(cantidad: number){
		let headers = new Headers({"Content-Type":"application/json"});
		return this.http.post(this.servidorRest + '/recargar/',
			{
				"token":this.publicToken,
				"cantidad":cantidad,
				"oxxo":1,
				"tipo":0,
				"idmetodo":0
			},{headers:headers}).map(response => response.json());
	}
	logout(){
		let headers = new Headers({"Content-Type":"application/json"});
		return this.http.post(this.servidorRest + '/logout/',
			{
				"token":this.publicToken
			},{headers:headers}).map(response => response.json());
	}
	getPublicToken(token:String){
		this.publicToken = token;
	}
}