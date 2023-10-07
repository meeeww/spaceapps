document.addEventListener("DOMContentLoaded", function () {
    const partida = document.querySelector(".partida");
    const gameOver = document.querySelector(".gameOver");
    const puntajeFinal = document.getElementById("puntajeFinal");
  
    // Agrega un evento de clic a toda la pantalla para ocultar la pantalla de "Game Over".
    document.addEventListener("click", function () {
      gameOver.style.display = "none";
      partida.style.display = "flex";
      // Puedes agregar aquí cualquier lógica adicional que necesites.
    });
  
    // Puedes mostrar la pantalla de "Game Over" y actualizar el puntaje final cuando el juego termina.
    function mostrarGameOver(puntaje) {
      partida.style.display = "none";
      gameOver.style.display = "flex";
      puntajeFinal.textContent = puntaje;
    }
  
    // Llama a la función `mostrarGameOver` con el puntaje final cuando el juego termina.
    // Ejemplo: mostrarGameOver(100); // Donde 100 es el puntaje final.
  });