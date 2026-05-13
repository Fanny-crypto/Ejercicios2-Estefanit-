// 1. Definición de la Clase de Error Personalizada
class ErrorLibroNoDisponible extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorLibroNoDisponible";
    }
}

// 2. Clase Base Material con validaciones
class Material {
    constructor(titulo, autor) {
        // Validación: El título no debe estar vacío
        if (!titulo || titulo.trim() === "") {
            throw new Error("Validación fallida: El título no puede estar vacío.");
        }
        // Validación: El autor debe tener al menos 3 caracteres
        if (!autor || autor.length < 3) {
            throw new Error("Validación fallida: El autor debe tener al menos 3 caracteres.");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    mostrarInfo() {
        return `\nTitulo: ${this.titulo}, \nAutor: ${this.autor}, \nDisponible: ${this.disponible}`;
    }

    prestar() {
        if (!this.disponible) {
            // Lanzamos la excepción personalizada si ya está prestado
            throw new ErrorLibroNoDisponible(`Error: El material "${this.titulo}" ya se encuentra prestado.`);
        }
        this.disponible = false;
        console.log(`>>> Exito: Has prestado "${this.titulo}"`);
    }

    devolver() {
        this.disponible = true;
        console.log(`<<< Exito: Has devuelto "${this.titulo}"`);
    }
}

// 3. Clases Hijas
class Libro extends Material {
    constructor(titulo, autor, numpaginas) {
        super(titulo, autor);
        this.numpaginas = numpaginas;
    }

    mostrarInfoLibro() {
        return `${this.mostrarInfo()}\nNumero de paginas: ${this.numpaginas}`;
    }
}

class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }

    mostrarInfoRevis() {
        return `${this.mostrarInfo()}\nEdicion: ${this.edicion}`;
    }
}

// --- BLOQUE DE EJECUCIÓN CON CAPTURA DE EXCEPCIONES ---

let Biblioteca = [];

try {
    console.log("--- Intentando registrar materiales ---");
    
    // Ejemplo de creación exitosa
    let libro1 = new Libro("Boulevard", "Flor M Salvador", 340);
    let revista1 = new Revista("National Geographic", "Oor", 150);
    
    Biblioteca.push(libro1, revista1);
    
    // --- Prueba de flujo de préstamo ---
    console.log(libro1.mostrarInfoLibro());
    
    libro1.prestar(); // Primer préstamo: Funciona
    
    console.log("\n--- Intento de segundo préstamo (Debe fallar) ---");
    libro1.prestar(); // Esto lanzará ErrorLibroNoDisponible

} catch (error) {
    // Captura selectiva de errores
    if (error instanceof ErrorLibroNoDisponible) {
        console.error(`[ERROR PERSONALIZADO]: ${error.message}`);
    } else {
        // Captura errores de validación (título vacío o autor corto)
        console.error(`[ERROR DE DATOS]: ${error.message}`);
    }
}

// Ejemplo de captura de error en validación de autor
try {
    console.log("\n--- Intentando crear libro con autor inválido ---");
    let libroError = new Libro("National Geographic", "Oor", 150); // Autor muy corto
} catch (error) {
    console.error(`[ERROR DE DATOS]: ${error.message}`);
}

