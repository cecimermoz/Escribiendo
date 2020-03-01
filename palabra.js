class Palabra{
    constructor(estado, palabra){
        this.estado = estado;
        this.palabra = palabra;
        this.puntos = this.palabra.length*10;
        this.tiempo = this.puntos;
        
    }
    estadoPalabra(){}
}

