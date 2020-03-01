var Vista = function(controlador, elementos){
    this.controlador = controlador;
    this.elementos = elementos;
};

Vista.prototype = {
    presionarEnter : function () {
        var contexto = this;
        this.elementos.input.on("keyup", function (event) {
        // Number 13 is the “Enter” key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            vista.elementos.boton.click();
        }})
    },

    cambiarColor:  function () {
        var nuevoColor = this.controlador.getRandomInt(this.controlador.listadoColores);
        this.elementos.fondoPalabra.css("background-color", nuevoColor);
    },

    mostrarPuntos: function (numero){
        this.elementos.puntos.html(numero);
    },

    mostrarHS: function(numero){
        this.elementos.hs.html(numero);
    },

    desaparecerPalabra: function (){
        this.elementos.claseInput.val("");
        this.elementos.claseInput.css({"color": "black", "font-style": "normal", "font-weight": "normal"});
    },

    procesarInput: function (){
        let input1 = this.elementos.claseInput.val();
        return input1.toUpperCase();
    }


};
