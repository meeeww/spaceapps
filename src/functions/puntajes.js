export default function puntajes() {
  var incremento = 0;
  var nivel = 1;
  var intervalId = setInterval(function () {
    if (incremento % 20 == 0 && incremento >= 20) {
      document.getElementById("indicadorNivel").innerHTML = "Nivel: " + nivel++;
    }
    incremento++;
    document.getElementById("score").innerHTML = "Score: " + incremento;
  }, 1000);
}
