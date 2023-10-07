export default function puntajes() {
  var incremento = 0;
  var nivel = 1;
  setInterval(function () {
    incremento++;
    document.getElementById("score").innerHTML = "Score: " + incremento;
  }, 1000);
}
