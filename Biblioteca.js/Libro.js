import { Material } from './Materiales.js';

export class Libro extends Material {
    
    #numpaginas;

    constructor(titulo = "", autor = "", numpaginas = 0) {
        super(titulo, autor);
        this.#numpaginas = numpaginas;
    }

    // getters y setters
    get numpaginas() { return this.#numpaginas; }
    set numpaginas(valor) { this.#numpaginas = valor; }

    mostrarInfoLibro() {
        return `${this.mostrarInfo()}\nNúmero de páginas: ${this.#numpaginas}`;
    }
}
