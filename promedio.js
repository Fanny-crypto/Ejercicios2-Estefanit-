/** calcular el promedio del estudiante*/
class Estudiante {
    constructor(nombre,matricula,promedio){
        this.nombre=nombre;
        this.matricula=matricula;
        this.promedio=promedio;
    }
    mostrarInformacion(){
        console.log(`nombre: ${this.nombre}`);
        console.log(`matricula: ${this.matricula}`);
        console.log(`promedio: ${this.promedio}`)
    }
actualizarPromedio(nuevoPromedio){
this.promedio=nuevoPromedio;
console.log("Promedio actualizado");
}
mensajeaprobado(){
    console.log (this.promedio >=70?
    "APROBADO" : "NO APROBADO");
}
}
let alumno1=new Estudiante("Nina","2309",69);
alumno1.mostrarInformacion();
alumno1.actualizarPromedio(88);
alumno1.mensajeaprobado();

