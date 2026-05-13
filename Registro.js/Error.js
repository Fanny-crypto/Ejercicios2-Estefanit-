export class ErrorRegistro extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "Error";
    }
}
