import { Empleado } from "./Empleado.js";
import {ValidacionError} from "./Error.js";

try{
    const empleado1 = new Empleado(8000,150,10,"Lili76450224");
    empleado1.mostrarEmpleado();
}catch(error){
    if(error instanceof ValidacionError){
        console.error(`Error: ${error.message}`)
    }else{
        console.error(("Error de sistema:)" + error.message));
    }
}
