export class Usuario{
	private _nombre		: String;
	private _apellidos	: String;
	private _tel		: String;
	private _email		: String;
	private _pw			: String;
	
	constructor(){}
	
	get nombre():String{
		return this._nombre;
	}
	set nombre(nombre:String){
		this._nombre= nombre;
	}

	get apellidos():String{
		return this._apellidos;
	}
	set apellidos(apellidos:String){
		this._apellidos= apellidos;
	}

	get tel():String{
		return this._tel;
	}
	set tel(tel:String){
		this._tel= tel;
	}

	get email():String{
		return this._email;
	}
	set email(email:String){
		this._email= email;
	}

	get pw():String{
		return this._pw;
	}
	set pw(pw:String){
		this._pw= pw;
	}
}