import { ErrorLibroDisponible } from './Errorlibro.js';

export class Material {
    
    #titulo;
    #autor;
    #disponible;

    constructor(titulo = "", autor = "") {
        this.titulo = titulo;
        this.autor = autor;
        this.#disponible = true; // Por defecto disponible
    }

    // getters
    get titulo() { return this.#titulo; }
    get autor() { return this.#autor; }
    get disponible() { return this.#disponible; }

    // setters
    set titulo(nuevoTitulo) {
        if (!nuevoTitulo || nuevoTitulo.trim() === "") {
            throw new ErrorLibroDisponible("El título no debe estar vacío");
        }
        this.#titulo = nuevoTitulo;
    }

    set autor(nuevoAutor) {
        if (!nuevoAutor || nuevoAutor.length < 3) {
            throw new ErrorLibroDisponible("El autor debe tener al menos 3 caracteres");
        }
        this.#autor = nuevoAutor;
    }

    // Método original
    mostrarInfo() {
        return `\nTítulo: ${this.#titulo}\nAutor: ${this.#autor}\nDisponible: ${this.#disponible ? "✅ Sí" : "❌ No"}`;
    }

    prestar() {
        if (!this.#disponible) {
            throw new ErrorLibroDisponible("Se encuentra ocupado / ya prestado");
        }
        this.#disponible = false;
        console.log("Material prestado correctamente");
    }

    devolver() {
        this.#disponible = true;
        console.log("Material devuelto correctamente");
    }
}
