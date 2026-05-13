export class ValidacionError extends Error{
    constructor(e){
    super(e);
    this.nombre=ValidacionErrores;
    this.codigo=404
    }
}

