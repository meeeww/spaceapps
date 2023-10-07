let clicked = false;
document.querySelector(".menuPrincipal").addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    document.querySelector(".infoPartida").classList.add("active");
    document.getElementById("presionaJugar").style.display = "none";
    import("./puntajes.js").then((module) => {
      module.default();
    });
  }
});

function stopGame() {}
