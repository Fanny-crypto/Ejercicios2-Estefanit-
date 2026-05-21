export class ErrorTrabajador extends Error{
    constructor(message){
        super(message);
        this.nombre = "ErrorTrabajador";
        this.codigo = 404;
    }
}
