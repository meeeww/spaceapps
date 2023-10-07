export default class Asteroide {
  nombre;
  imagen;
  tamaño;
  velocidad;
  direccion;
  id;

  constructor(nombre, imagen, tamaño, velocidad, direccion, id) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.tamaño = tamaño;
    this.velocidad = velocidad;
    this.direccion = direccion;
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getImagen() {
    return this.imagen;
  }

  setImagen(imagen) {
    this.imagen = imagen;
  }

  getTamaño() {
    return this.tamaño;
  }

  setTamaño(tamaño) {
    this.tamaño = tamaño;
  }

  getVelocidad() {
    return this.velocidad;
  }

  setVelocidad(velocidad) {
    this.velocidad = velocidad;
  }

  getDireccion() {
    return this.Direccion;
  }

  setDireccion(Direccion) {
    this.Direccion = Direccion;
  }
  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }
}

/* yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo */
