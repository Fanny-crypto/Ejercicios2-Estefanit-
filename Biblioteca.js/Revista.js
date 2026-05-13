import { Material } from './Materiales.js';

export class Revista extends Material {
    #edicion;

    constructor(titulo = "", autor = "", edicion = "") {
        super(titulo, autor);
        this.#edicion = edicion;
    }

    // Getters y Setters
    get edicion() { return this.#edicion; }
    set edicion(valor) { this.#edicion = valor; }

    mostrarInfoRevis() {
        return `${this.mostrarInfo()}\nEdición: ${this.#edicion}`;
    }
}
