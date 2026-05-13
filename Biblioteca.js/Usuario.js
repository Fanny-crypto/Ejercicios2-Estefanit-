import { ValidacionErrores } from './Errorlibro.js';

export class Usuario {
    #nombre;
    #edad;
    #email;
    #passsword;

    constructor(nombre = "", edad = 0, email = "", passsword = "") {
        // Validaciones tal cual las escribiste
        if (!nombre || nombre.length < 3) {
            throw new ValidacionErrores("El nombre debe tener al menos 3 caracteres");
        }
        if (edad < 18) {
            throw new ValidacionErrores("Debe ser mayor de edad");
        }
        if (!email.includes("@")) {
            throw new ValidacionErrores("El formato del correo no es válido");
        }
        if (!passsword || passsword.length < 6) {
            throw new ValidacionErrores("La contraseña debe ser mayor a 6 caracteres");
        }

        this.#nombre = nombre;
        this.#edad = edad;
        this.#email = email;
        this.#passsword = passsword;
    }

    // Getters
    get nombre() { return this.#nombre; }
    get edad() { return this.#edad; }
    get email() { return this.#email; }

    // modificar
    setModificarPassword(newPassword) {
        const ValidarUser = /[?/*,$#]/;
        if (newPassword.length < 6) {
            throw new ValidacionErrores("Debe tener más de 6 caracteres");
        }
        if (!ValidarUser.test(newPassword)) {
            throw new ValidacionErrores("El password debe incluir un caracter especial");
        }
        this.#passsword = newPassword;
        console.log("Contraseña correcta y modificada");
    }

    mostrarDatos() {
        return `\nNombre: ${this.#nombre}\nEdad: ${this.#edad}\nCorreo: ${this.#email}`;
    }
}
