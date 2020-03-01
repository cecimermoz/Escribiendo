var Controlador = function(jugador){
    this.listadoColores = [
        '#5BC0EB', '#FDE74C', '#9BC53D', '#E55934', '#FA7921',
        '#2D2A32', '#EE7674', '#DE369D', '#4F6D7A', '#802392',
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];

    this.myTimer = 0;
    this.jugador = jugador;
    this.hs = jugador.hs;
    this.modal = document.getElementById("modal");
    // to reduce countdown, reduce "dificultad"
    this.dificultad = 5;

};

Controlador.prototype = {
    modalReglas: function(){
        var contexto = this;
        var modal = this.modal;
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
            contexto.generarPalabra(); 

            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    contexto.generarPalabra(); 
            vista.mostrarHS(contexto.jugador.hs);


            }
        }
    },

    generarPalabra: function(numPalabra,upper,jugador){

        numPalabra = this.getRandomInt(modelo.listadoPalabras); 
        upper = numPalabra.toUpperCase();
        this.palabra = new Palabra(true, upper);    
        vista.elementos.palabra.html(upper);
        vista.elementos.puntos.html(this.jugador.acumuladorPuntos);
        vista.elementos.vidas.html(this.jugador.cantidadVidas);
        vista.cambiarColor();
        
    },
    startTimer: function (resetInterval = false) {
        var timer = this.dificultad;
        var contexto = this;
        var display = document.querySelector('#time');
        if(resetInterval){
            clearInterval(contexto.myTimer);
            contexto.generarPalabra(); 
        }
        contexto.myTimer = setInterval(function () {
            // to start only after the modal it's closed
            if( controlador.modal.style.display == "none"){
                vista.mostrarHS(contexto.jugador.hs);   
                display.textContent = timer;
                timer--;
                // if there's still time, enters the if
                if (timer < 0) { 
                    contexto.jugador.perderVidas(1);
                    timer = contexto.dificultad;
                    contexto.generarPalabra();
                    vista.desaparecerPalabra();
                }
            }
        }, 1000);
    },

    getRandomInt: function (max) {
        return max[Math.floor(max.length * Math.random())];
    },
    // aleatorio = Math.floor(Math.random() * (listado.length));
    // seleccion = listado[aleatorio]
    conocerPalabra: function(Pal){
        return Pal.palabra;
    },

    conocerEstadoPalabra: function(Pal){
        return Pal.estado;
    },

    validar: function(){
        let user = vista.procesarInput();
        let palabra = this.conocerPalabra(this.palabra);
        let estado = this.conocerEstadoPalabra(this.palabra);
        if(!estado){
            vista.desaparecerPalabra(); 
        } else if(estado && palabra==user){
            jugador.acumularPuntos(this.palabra);
            vista.mostrarPuntos(jugador.acumuladorPuntos); /* 
            vista.mostrarHS(jugador.hs(jugador.puntos)); */
            this.startTimer(true);
            vista.desaparecerPalabra(); 
        } else if(estado && palabra !== user){
            $(".vidas").html(jugador.cantidadVidas);
            $(".inputPalabra").css({"color": "red", "font-style": "italic", "font-weight": "bold"});
            setTimeout(() => {vista.desaparecerPalabra()}, 50);
        }
    },
}
