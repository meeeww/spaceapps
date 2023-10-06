import Mundo from "../objects/Mundo.js";

async function crearMundo(nombre, imagen, tamaño) {
  let mundo = new Mundo(nombre, imagen, tamaño);
  return mundo;
}

export default crearMundo;
