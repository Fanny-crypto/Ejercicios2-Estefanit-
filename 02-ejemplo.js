class Persona {
    constructor (nombre, edad, curp) {
        this.nombre=nombre;
        this.edad=edad;
        this.curp=curp;
    }
    saludarpersona(){
        console.log(`Hola ${this.nombre} y tienes ${this.edad} y tu curp es ${this.curp}`);
    }
}

let persona1 = new Persona("Estefanit",20,"GACE050430MTCRNSA4");
persona1.saludarpersona();

{
    let persona2 = new Persona("Emiliano",18,"ROHE070608MTCDRMA9");
    persona2.saludarpersona()
}
