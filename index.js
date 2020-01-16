var jugador = new Jugador(0, 1);
var controlador = new Controlador(jugador);
var vista = new Vista(controlador, {
    'input': $("#inputPalabra"),
    'boton': $("#myBtn"),
    'fondoPalabra': $(".palabra"),
    'palabra': $(".palabra h2"),
    'puntos': $(".puntos"),
    'vidas': $(".vidas"),
    'claseInput': $(".inputPalabra"),
});

controlador.generarPalabra();// que está en VISTA

// Inicializa el juego (después será por botón) pertenece a INDEX
window.onload = function () {
    startTimer(display);
};

