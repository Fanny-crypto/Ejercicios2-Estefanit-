export class ErrorRestaurante extends Error{
    constructor(message){
        super(message);
        this.nombre = "ErrorRestaurante";
        this.codigo = 404;
    }
}
