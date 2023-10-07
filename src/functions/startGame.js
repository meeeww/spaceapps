document.querySelector(".menuPrincipal").addEventListener("click", () => {
  document.querySelector(".infoPartida").classList.add("active");
  document.getElementById("presionaJugar").style.display = "none";
  import("./puntajes.js").then((module) => {
    module.default();
  });
});
