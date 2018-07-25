class Automovil{
	public marca:string;
	public modelo: string;

	public mostrar(){
		return "Hola! Soy un " + this.marca + ", modelo " + this.modelo;
	}
}

var automovil = new Automovil();
automovil.marca = "Toyota";
automovil.modelo = "2015";
console.log(automovil.mostrar());

var automovil2 = new Automovil();
automovil2.marca = "Mazda";
automovil2.modelo = "2016";
console.log(automovil2.mostrar());