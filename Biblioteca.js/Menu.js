import promptSync from 'prompt-sync';
const leer = promptSync();

import { Libro } from './Libro.js';
import { Revista } from './Revista.js';
import { Usuario } from './Usuario.js';
import { ErrorLibroDisponible } from './Errorlibro.js';

// array
export const Biblioteca = [];
export const ListaUsuarios = [];

// menu principal
let opcion;
do {
    console.log("\n=====================================");
    console.log("     SISTEMA DE BIBLIOTECA");
    console.log("=====================================");
    console.log("1. Agregar Libro");
    console.log("2. Agregar Revista");
    console.log("3. Ver todos los materiales");
    console.log("4. Prestar / Devolver material");
    console.log("5. Crear Usuario");
    console.log("6. Ver Usuarios");
    console.log("7. Salir");
    console.log("-------------------------------------");

    opcion = leer("Seleccione una opción (1-7): ");

    switch (opcion) {

        // agrega libro
        case "1": {
            let ok = false;
            let nuevoLibro;
            while (!ok) {
                try {
                    const tit = leer("Título del libro: ");
                    const aut = leer("Autor: ");
                    const pag = parseInt(leer("Número de páginas: "));
                    nuevoLibro = new Libro(tit, aut, pag);
                    ok = true;
                } catch (e) {
                    console.error("NO!!", e.message);
                }
            }
            Biblioteca.push(nuevoLibro);
            console.log("Libro agregado a la biblioteca");
            break;
        }

        // agrega revista
        case "2": {
            let ok = false;
            let nuevaRevista;
            while (!ok) {
                try {
                    const tit = leer("Título de la revista: ");
                    const aut = leer("Autor / Editor: ");
                    const edic = leer("Número de edición: ");
                    nuevaRevista = new Revista(tit, aut, edic);
                    ok = true;
                } catch (e) {
                    console.error("NOO!!", e.message);
                }
            }
            Biblioteca.push(nuevaRevista);
            console.log("Revista agregada a la biblioteca");
            break;
        }

        case "3": {
            if (Biblioteca.length === 0) {
                console.log("La biblioteca está vacía");
                break;
            }
            Biblioteca.forEach((mat, i) => {
                if (mat instanceof Libro) console.log(`\n Libro ${i+1}: ${mat.mostrarInfoLibro()}`);
                if (mat instanceof Revista) console.log(`\n Revista ${i+1}: ${mat.mostrarInfoRevis()}`);
            });
            break;
        }

        case "4": {
            if (Biblioteca.length === 0) {
                console.log("No hay materiales");
                break;
            }
            const idx = parseInt(leer("Número del material (1,2...): ")) - 1;
            if (isNaN(idx) || idx < 0 || idx >= Biblioteca.length) {
                console.log("Índice inválido");
                break;
            }
            const accion = leer("¿Qué desea hacer? (P=Prestar / D=Devolver): ").toUpperCase();
            try {
                if (accion === "P") Biblioteca[idx].prestar();
                else if (accion === "D") Biblioteca[idx].devolver();
                else console.log("Opción inválida");
            } catch (e) {
                console.error("No!!", e.message);
            }
            break;
        }

        case "5": {
            let ok = false;
            let nuevoUser;
            while (!ok) {
                try {
                    const nom = leer("Nombre: ");
                    const eda = parseInt(leer("Edad: "));
                    const cor = leer("Correo (con @): ");
                    const pas = leer("Contraseña (+6 car. + esp. ej: *,$,#): ");
                    nuevoUser = new Usuario(nom, eda, cor, pas);
                    
                    // Prueba modificar contraseña (como en tu código)
                    const nuevaPass = leer("Cambiar contraseña (ej: tefa*13): ");
                    nuevoUser.setModificarPassword(nuevaPass);

                    ok = true;
                } catch (e) {
                    console.error("No se cumple el objetivo:", e.message);
                }
            }
            ListaUsuarios.push(nuevoUser);
            console.log("Usuario creado con éxito");
            break;
        }

        case "6": {
            if (ListaUsuarios.length === 0) {
                console.log("No hay usuarios registrados");
                break;
            }
            ListaUsuarios.forEach((u, i) => console.log(`\n👤 Usuario ${i+1}:${u.mostrarDatos()}`));
            break;
        }

        case "7":
            console.log("Gracias por usar el sistema");
            break;

        default:
            console.log("Opción inválida");
    }

} while (opcion !== "7");
