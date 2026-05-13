import promptSync from 'prompt-sync';
const leer = promptSync();
import { Añadir } from './Pedir.js';
import { Participante } from './Participantes.js';

// Objeto para agregar participantes
const registro = new Añadir();

// menú principal
let opcion;
do {
    console.log("\n=====================================");
    console.log("   SISTEMA DE REGISTRO DE CURSO");
    console.log("=====================================");
    console.log("1. Registrar nuevo participante");
    console.log("2. Ver promedios (Altura y Edad)");
    console.log("3. Ver lista completa de participantes");
    console.log("4. Salir del sistema");
    console.log("-------------------------------------");

    opcion = leer("Seleccione una opción (1-4): ");

    switch (opcion) {
        case "1":
            registro.ingresarDatos();
            break;

        case "2":
            console.log(Participante.promedioAltura());
            console.log(Participante.promedioEdad());
            break;

        case "3":
            console.log(Participante.mostrarTodos());
            break;

        case "4":
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
            break;

        default:
            console.log("Opción inválida. Intente nuevamente.");
            break;
    }

} while (opcion !== "4");
