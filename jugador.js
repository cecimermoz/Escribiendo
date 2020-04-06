class Jugador {
    constructor(vidas){
        this.acumuladorPuntos = 0;
        this.vidasInicio = vidas;
        this.cantidadVidas = vidas;
        this.hs;
    }
    hs(){
        if(localStorage.getItem("Mi Score")){
            this.hs = localStorage.getItem("Mi Score");
        } else {
            this.hs = 0;
        }
    }
    perderVidas(cantidad){
        this.cantidadVidas -= cantidad;
        if(this.cantidadVidas <= 0){
            controlador.modalFinal();
            this.cantidadVidas = this.vidasInicio;
            this.highscore(this.acumuladorPuntos);
            this.acumuladorPuntos = 0;
        }
    }

    acumularPuntos(palabra){
        this.acumuladorPuntos += palabra.puntos;
    }

    highscore(num){
        if(num >= this.hs){
            this.hs = num;
            localStorage.setItem("Mi Score", this.hs);
        }
    }
}
