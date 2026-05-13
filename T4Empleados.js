class ErrorEmpleado extends Error {
    constructor(mensaje){
        super(mensaje);
        this.name = "Error";
    }
}

class Empleado{
    #rfc;
    #sueldoBase;
    #pagoHoraExtra;
    #horasExtra;
    constructor(sueldoBase,PagoHoraExtra,horasExtra,rfc){
        try{
            if(sueldoBase!=="number"){
                throw new ErrorEmpleado ("El sueldo debe ser mayor a 0");
            }
            if(PagoHoraExtra<=0 || typeof PagoHoraExtra!=="number"){
            throw new ErrorEmpleado ("El pagon porhora debe ser mayor a 0");    
            }
            if(horasExtra<0 || typeof horasExtra !== "number"){
                throw new ErrorEmpleado ("Las horas extra no pueden ser negativas");
            }
            if (rfc.length<12){
                throw new ErrorEmpleado ("El RFC no es valido");
            }
            this.#sueldoBase=sueldoBase;
            this.#pagoHoraExtra=PagoHoraExtra;
            this.#horasExtra=horasExtra;
            this.#rfc=rfc;
        } catch (error){
            console.log("Error:" + error.mesage);
            this.#sueldoBase=0;
            this.#pagoHoraExtra=0;
            this.#horasExtra=0;
            this.#rfc="No valido ñor sorry";
        }

    }
    calcularHorasExtra(){
        return this.#horasExtra * this.#pagoHoraExtra;
    }

    calcularSueldoBruto(){
        return this.#sueldoBase + this.calcularHorasExtra();
    }

    mostrarResultado(){
        console.log ("RFC:" + this.#rfc);
    }

    mostrarCompleto(){
        console.log("Resultado completo");
        console.log("RFC:" + this.#rfc);
        console.log("Sueldo base: $" + this.#sueldoBase);
        console.log("Pago por Hora Extra: $" + this.calcularHorasExtra());
        console.log("Sueldo Neto: $" + this.calcularSueldoBruto());
    }
    getRfc() {return this.#rfc;}
    setRfc(nuevoRfc){
        try{
            if (nuevoRfc.length<12) throw new ErrorEmpleado("RFC invalido ups");
            this.#rfc =  nuevoRfc;
        }catch(e){
            console.log(e.message);
        }
    }
    getsueldoBase(){return this.#sueldoBase; }
    setsueldoBase(NuevoValor) {
        try{
            if (NuevoValor<=0) throw new ErrorEmpleado ("No esta permitido");
            this.#sueldoBase=NuevoValor;
        }catch(e) {
            console.log(e.message);
        }
    }
    getHorasExtra() {return this.#horasExtra; }
    setHorasExtra(nuevasHorasEx) {
        try{
            if(nuevasHorasEx < 0) throw new ErrorEmpleado ("Ya deja de trabajar mas horas");
            this.#horasExtra = nuevasHorasEx;
        }catch(e) {
            console.log(e.message);
        }
    }
}

class EmpleadoCompleto extends Empleado {
    #bono;
    constructor(sueldoBase,PagoHoraExtra,horasExtra,rfc,bono) {
        super(sueldoBase,PagoHoraExtra,horasExtra,rfc);
        try{
            if(bono < 0) throw ErrorEmpleado ("No puee ser negativo el bono")
                this.#bono = bono;
        }catch(e) {
            console.log(e.message);
            this.#bono = 0;
        }
    }
    calcularSueldoNeto(){
        return this.calcularSueldoBruto() + this.#bono;
    }
    mostrarCompleto(){
        super.mostrarCompleto();
        console.log("Bono: $" + this.#bono);
        console.log("Sueldo Neto: $" + this.calcularSueldoNeto());
    }
}

let empleado1 = new Empleado (8000,150,10,"Lili76450224");
empleado1.mostrarCompleto();
empleado1.mostrarCompleto();

let empleado2 = new EmpleadoCompleto (12000,200,15,"qlpw345673pot",2000);
empleado2.mostrarCompleto();

empleado2.setsueldoBase(-500);


