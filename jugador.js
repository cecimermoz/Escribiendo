class Jugador {
    constructor(vidas, hs){
        this.acumuladorPuntos = 0;
        this.vidasInicio = vidas;
        this.cantidadVidas = vidas;
        this.hs = hs;
    }

    perderVidas(cantidad){
        this.cantidadVidas -= cantidad;
        console.log(this.cantidadVidas);
        if(this.cantidadVidas <= 0){
            alert("Perdiste... volvé a intentar");
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
        }
    }
}

/* 

if(contexto.jugador.cantidadVidas >= 1){
    console.log("cantidad de vidas" + jugador.cantidadVidas);
    contexto.jugador.perderVidas(1);
    vista.mostrarHS(contexto.jugador.acumularPuntos);
   } else {
    var hsAnterior = contexto.hs;
    contexto.hs = contexto.jugador.acumuladorPuntos;
    contexto.jugador.acumuladorPuntos = 0;
    contexto.jugador.cantidadVidas = contexto.lifes;
    if(hsAnterior < contexto.hs){
        hsAnterior = contexto.hs;
        vista.mostrarHS(contexto.hs);
    }else{
        vista.mostrarHS(hsAnterior);
    }
} */