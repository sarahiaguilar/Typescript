// CLASE
var Propiedades = /** @class */ (function () {
    // CONSTRUCTOR
    function Propiedades() {
        this.texto = "palabra";
        console.log("texto", this.texto);
        this.numero = 5;
        console.log("numero", this.numero);
        this.booleana = true;
        console.log("booleana", this.booleana);
        this.arreglo = ["texto1", "texto2", 0, true];
        console.log("arreglo", this.arreglo);
        this.cualquiera = { "propiedad1": "valor1",
            "propiedad2": "valor2",
            "propiedad3": "valor3" };
        console.log("cualquiera", this.cualquiera);
    }
    return Propiedades;
}());
var objeto = new Propiedades();
