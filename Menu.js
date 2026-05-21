import promptSync from "prompt-sync";
const prompt = promptSync();
import { Trabajador } from "./Trabajadores.js";
import { ErrorTrabajador } from "./Error.js";


let trabajadores=[];
let opcion;

do{
    console.log("\n===========Menu==========");
    console.log("1. Registrar trabajadores:");
    console.log("2. Mostrar trabajadores:");
    console.log("3. Salir");

    opcion=parseInt(prompt("Seleccione una opción: "));

    switch(opcion){
        case 1:
            try {
                let nombre=prompt("Ingrese el nombre: ");
                let horas=parseFloat(prompt("Ingrese las horas trabajadas: "));
                let pago=parseFloat(prompt("Ingrese el pago: "));

                let trabajador=new Trabajador(nombre, horas,pago);

                trabajadores.push(trabajador);

                console.log("\nTrabajador agregado correctamente: ")
            } catch (error) {
                console.log("\nERROR", error.message)
            }
            break;

        case 2:
            if(trabajadores.length===0){
                console.log("\nAun no hay registros de trabajadores")
            }else{
                console.log("\n=========Lista de trabajadores=========");
                trabajadores.forEach((trabajador,index)=>{
                    console.log(`\nTrabajador ${index+1}`);
                    console.log(`Nombre: `, trabajador.getNombre);
                    console.log(`Horas Trabajadas: `, trabajador.getHorasTrabajadas);
                    console.log(`Pago por hora: `, trabajador.getPagoxHora);
                    console.log(`Sueldo bruto: `, trabajador.calcularSueldoBruto());
                    console.log(`Descuento: `, trabajador.calcularDescuento());
                    console.log(`Sueldo final: `, trabajador.calcularSueldoFinal());
                })
            }
            break;

        case 3:
            console.log("\nFin de la ejecución");
            break;
        default:
            console.log("\nOpcion no válida")
    }
}while(opcion!==3)

    