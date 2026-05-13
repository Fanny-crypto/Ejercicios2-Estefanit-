import promptSync from 'prompt-sync';
const leer = promptSync();
import { ErrorRegistro } from './Error.js';

export class Participante {
    // ATRIBUTOS PRIVADOS (Encapsulamiento)
    #nombre;
    #edad;
    #altura;
    #sexo;

    // Array de objetos
    static PersonasRegistradas = [];

    constructor(nombre = "", edad = 0, altura = 0, sexo = "") {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#altura = altura;
        this.#sexo = sexo;
    }

    // getters
    get nombre() { return this.#nombre; }
    get edad() { return this.#edad; }
    get altura() { return this.#altura; }
    get sexo() { return this.#sexo; }

    // setter 
    set nombre(nuevoNombre) {
        if (nuevoNombre.trim() === "") {
            throw new ErrorRegistro("El nombre no puede estar vacío");
        }
        this.#nombre = nuevoNombre;
    }

    set edad(nuevaEdad) {
        let edadNum = parseInt(nuevaEdad);
        if (isNaN(edadNum)) {
            throw new ErrorRegistro("La edad debe ser un número");
        }
        if (edadNum < 0) {
            throw new ErrorRegistro("La edad NO puede ser negativa");
        }
        this.#edad = edadNum;
    }

    set altura(nuevaAltura) {
        let altNum = parseFloat(nuevaAltura);
        if (isNaN(altNum) || altNum <= 0) {
            throw new ErrorRegistro("Altura inválida (debe ser mayor a 0, ej: 1.65)");
        }
        this.#altura = altNum;
    }

    set sexo(nuevoSexo) {
        let sexoVal = nuevoSexo.toUpperCase().trim();
        if (sexoVal !== "F" && sexoVal !== "M") {
            throw new ErrorRegistro("El sexo solo puede ser 'F' (Femenino) o 'M' (Masculino)");
        }
        this.#sexo = sexoVal;
    }

    // clase principal con métodos estáticos para cálculos y mostrar datos
    static promedioAltura() {
        if (Participante.PersonasRegistradas.length === 0) {
            return "No hay participantes registrados aún.";
        }
        let suma = Participante.PersonasRegistradas.reduce((total, p) => total + p.altura, 0);
        let promedio = suma / Participante.PersonasRegistradas.length;
        return `Promedio de altura: ${promedio.toFixed(2)} metros`;
    }

    static promedioEdad() {
        if (Participante.PersonasRegistradas.length === 0) {
            return "No hay participantes registrados aún.";
        }
        let suma = Participante.PersonasRegistradas.reduce((total, p) => total + p.edad, 0);
        let promedio = suma / Participante.PersonasRegistradas.length;
        return `Promedio de edad: ${promedio.toFixed(0)} años`;
    }

    // datos registrados
    static mostrarTodos() {
        if (Participante.PersonasRegistradas.length === 0) {
            return "No hay participantes registrados aún.";
        }
        let texto = "\n=== LISTA DE PARTICIPANTES REGISTRADOS ===\n";
        Participante.PersonasRegistradas.forEach((p, i) => {
            texto += `${i+1}. Nombre: ${p.nombre} | Edad: ${p.edad} | Altura: ${p.altura}m | Sexo: ${p.sexo === 'F' ? 'Femenino' : 'Masculino'}\n`;
        });
        return texto;
    }
}
