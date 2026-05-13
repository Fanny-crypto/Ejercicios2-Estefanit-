import promptSync from 'prompt-sync';
const leer = promptSync();
import { Participante } from "./Participantes.js";
import { ErrorRegistro } from './Error.js';

export class Añadir extends Participante {

    // ingresar datos
    ingresarDatos() {
        let participanteNuevo = new Participante();
        let datoCorrecto = false;

        console.log("\n--- NUEVO REGISTRO ---");

        // NOMBRE
        while (!datoCorrecto) {
            try {
                participanteNuevo.nombre = leer("Ingrese Nombre completo: ");
                datoCorrecto = true;
            } catch (error) {
                console.error(error.message);
            }
        } datoCorrecto = false;

        // EDAD no negativa
        while (!datoCorrecto) {
            try {
                participanteNuevo.edad = leer("Ingrese Edad: ");
                datoCorrecto = true;
            } catch (error) {
                console.error(error.message);
            }
        } datoCorrecto = false;

        // ALTURA
        while (!datoCorrecto) {
            try {
                participanteNuevo.altura = leer("Ingrese Altura en metros (ej: 1.70): ");
                datoCorrecto = true;
            } catch (error) {
                console.error(error.message);
            }
        } datoCorrecto = false;

        // sexo (F/M)
        while (!datoCorrecto) {
            try {
                participanteNuevo.sexo = leer("Ingrese Sexo (F/M): ");
                datoCorrecto = true;
            } catch (error) {
                console.error(error.message);
            }
        }

        // OBJETO en el Array
        Participante.listaParticipantes.push(participanteNuevo);
        console.log("Participante registrado con éxito.");
    }
}
