export default class Mundo {
    nombre;
    imagen;
    tamaño;
  
    constructor(nombre, imagen, tamaño) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.tamaño = tamaño;
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
  }
  