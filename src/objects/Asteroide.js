export default class Asteroide {
    nombre;
    imagen;
    tamaño;
    velocidad;
    direccion;
  
    constructor(nombre, imagen, tamaño, velocidad, direccion) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.tamaño = tamaño;
      this.velocidad = velocidad;
      this.direccion = direccion;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setetNombre(nombre) {
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
  }
  
  
  /* yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo */