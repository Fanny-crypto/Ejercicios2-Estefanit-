import { ErrorTrabajador } from "./Error.js";

export class Trabajador{
    //Encapsulamiento
    #nombre;
    #horasTrabajadas;
    #pagoxHora

    constructor(nombre,horasTrabajadas,pagoxHora){
        this.setNombre=nombre;
        this.setHorasTrabajadas=horasTrabajadas;
        this.setPagoxHora=pagoxHora;
    }

    //Uso de los getters
    get getNombre(){
        return this.#nombre
    }
    get getHorasTrabajadas(){
        return this.#horasTrabajadas
    }
    get getPagoxHora(){
        return this.#pagoxHora
    }

    //Uso de setters
    set setNombre(nombre){
        if(nombre.trim()===""){
            throw new ErrorTrabajador("El nombre no puede estar vacio")
        }
        this.#nombre = nombre;
    }

    set setHorasTrabajadas(horas){
        if(horas<=0 || isNaN(horas)){
            throw new Error ("Las horas trabajadas debe ser mayor a 0")
        }
        this.#horasTrabajadas = horas;
    }
       set setPagoxHora(pago){
        if(pago<=0 || isNaN(pago)){
            throw new Error ("El pago por hora debe ser mayor a 0")
        }
        this.#pagoxHora = pago;
    }

    //Métodos para calcular sueldos
    calcularSueldoBruto(){
        return this.#horasTrabajadas * this.#pagoxHora
    }

    calcularDescuento(){
        return this.calcularSueldoBruto()*0.10
    }

    calcularSueldoFinal(){
        return this.calcularSueldoBruto()-this.calcularDescuento()
    }

}

