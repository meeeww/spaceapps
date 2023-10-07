let clicked = false;
document.querySelector(".partida").addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    document.querySelector(".infoPartida").classList.add("active");
    document.getElementById("presionaJugar").style.display = "none";
    document.querySelector(".configPartida").classList.add("active");
    import("./puntajes.js").then((module) => {
      module.default(false);
    });
  }
});
