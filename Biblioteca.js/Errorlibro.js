// Error para materiales
export class ErrorLibroDisponible extends Error {
    constructor(message) {
        super(message);
        this.nombre = "ErrorLibroDisponible";
        this.codigo = 404;
    }
}

// Error para usuarios
export class ValidacionErrores extends Error {
    constructor(message) {
        super(message);
        this.nombre = "ValidacionErrores";
        this.codigo = 404;
    }
}
