class VehiculosAutonomos {
  #conductor;
  #marca;
  #modelo;
  #velocidad;

  constructor (conductor, marca, modelo, velocidad) {
    this.#conductor = conductor;
    this.#marca = marca;
    this.#modelo = modelo;
    this.#velocidad = velocidad;
  }

  #validarVelocidad(velocidad) {
    if (velocidad < 0) {
      console.log("Velocidad no puede ser negativa");
    } else {
      this.#velocidad = velocidad;
    }
  }

  get RevisionVehiculo() {
    return {
      conductor: this.#conductor,
      marca: this.#marca,
      modelo: this.#modelo,
      velocidad: this.#velocidad
    }
  }

  get ObtenerVehiculo() {
    return this.#conductor;
  }

  set cambiarConductor(nuevoConductor) {
    this.#conductor = nuevoConductor;
    console.log(`El nuevo conductor se llama: ${this.#conductor}`);
  }

  set cambiarVelocidad(velocidadNueva) {
    this.#validarVelocidad(velocidadNueva);
  }

  informaciondVehiculo() {
    console.log(`
        el vehiculo es: ${this.#marca}; ${this.#modelo};
        El nombre del conductor: ${this.#conductor};
        Su velocidad es de: ${this.#velocidad}`);
  }
}

const Auto1 = new VehiculosAutonomos ("Karime Luilli","Mercedes","Autonomo",60);
Auto1.cambiarVelocidad = -20;
Auto1.cambiarVelocidad = 200;
Auto1.cambiarConductor = "Eduardo Perrix";
console.log("Los datos del vehiculo:", Auto1.ObtenerVehiculo);
Auto1.informaciondVehiculo();



