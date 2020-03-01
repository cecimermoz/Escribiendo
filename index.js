var jugador = new Jugador(3, 0);
var controlador = new Controlador(jugador);
var vista = new Vista(controlador, {
    'input': $("#inputPalabra"),
    'boton': $("#myBtn"),
    'fondoPalabra': $(".palabra"),
    'palabra': $(".palabra h2"),
    'puntos': $(".puntos"),
    'vidas': $(".vidas"),
    'claseInput': $(".inputPalabra"),
    'hs': $(".hs"),
})
var modelo = new Modelo(jugador);

// Inicializa el juego (después será por botón) pertenece a INDEX
window.onload = function () {
    controlador.modalReglas();
    controlador.startTimer();
    vista.presionarEnter();
};

