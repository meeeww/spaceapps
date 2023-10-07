document.querySelector(".menuPrincipal").addEventListener("click", () => {
  console.log("hola");
  document.querySelector(".infoPartida").classList.add("active");
  document.getElementById("presionaJugar").style.display = "none";
  import("./puntajes.js").then((module) => {
    module.default();
  });
});
