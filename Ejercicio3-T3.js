class VehiculosAutonomos {
    #conductor;
    #modelo;
    #marca;
    #velocidad;
    constructor(conductor,marca,modelo,velocidad){
    this.#conductor=conductor;
    this.#marca=marca;
    this.#modelo=modelo;
    this.#velocidad=velocidad;
}

#validarVelocidad(valor){
    if (valor >= 0 && valor <= 180){
        this.#velocidad=valor
    }else{
        console.log(`ESTO NO ESTA PERMITIDOO!! ${this.#velocidad=valor}`);
    }
}

//getter
get ObtenerDVehicl(){
    return {
        conductor: this.#conductor,
        marca: this.#marca,
        modelo: this.#modelo,
        velocidad: this.#velocidad
    };
}
get ObtenerVelo(){
    return this.#velocidad
}
//setter
set cambiarConductor(nuevoConductor){
this.#conductor=nuevoConductor;
console.log(`El nuevo conductor se llama: ${this.#conductor}`);
}
set cambiarVelocidad(velocidadNueva){
    this.#validarVelocidad(velocidadNueva);
}
informaciondVehiculo(){
    console.log(`
        el vehiculo es: ${this.#marca} ${this.#modelo}
        El nombre del conductor: ${this.#conductor}
        Su velocidad es de: ${this.#velocidad}`);
}
    }

    const Auto1 = new VehiculosAutonomos ("Karime Luilli","Mercedes","Autonomo",60);
    Auto1.cambiarVelocidad = -20;
    Auto1.cambiarVelocidad = 200;
    Auto1.cambiarConductor = "Eduardo Perrix";
    console.log("Los datos del vehiculo:",
    Auto1.ObtenerDVehicl);
    Auto1.informaciondVehiculo();
    