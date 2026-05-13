 /**Biblioteca */
/* class Material {
    constructor (titulo,autor){
        this.titulo=titulo;
        this.autor=autor;
        this.disponible=true;
    }
    mostrarInfo(){
        return console.log(`\ntitulo: ${this.titulo},\nautor: ${this.autor},\ndisponible: ${this.disponible}`)
    }
    prestar(){
        this.disponible = false;
    }
    devolver(){
        this.disponible = true;
    }
}

class Libro extends Material{
    constructor (titulo,autor,numpaginas){
        super(titulo,autor);
        this.numpaginas = numpaginas;
    }
mostrarInfoLibro(){
    return (`${this.mostrarInfo()}\nnumeros de paginas:${this.numpaginas}`);
 }
}

class Revista extends Material {
    constructor (titulo,autor,edicion){
        super(titulo,autor);
        this.edicion=edicion;
    }
    mostrarInfoRevis() {
        return (`${this.mostrarInfo()}\nedicion: ${this.edicion}`);
    }
}

let Biblioteca = []
let libro1 = new Libro ("Romper el Circulo","Colleen Hoover",277);
let revista1 = new Revista ("Acta Poética","Dra. Esther Cohen Dabbah",290);
Biblioteca.push(libro1);
Biblioteca.push(revista1);
libro1.prestar();
console.log(libro1.mostrarInfoLibro());

revista1.devolver();
console.log(revista1.mostrarInfoRevis()); */


export class ErrorLibroDisponible extends Error{
    constructor(message){
        super(message);
        this.nombre = ErrorLibroDisponible;
        this.codigo = 404;
    }
}

// Validaciones nuevas
try {
    // Validar que titulo no este vacio
    if (!libro1.titulo || libro1.titulo.trim() === "") {
        throw new ErrorLibroDisponible("El titulo no debe estar vacio");
    }
    // Validar que autor tenga al menos 3 caracteres
    if (!libro1.autor || libro1.autor.length < 3) {
        throw new ErrorLibroDisponible("El autor debe tener al menos 3 caracteres");
    }
    // Validar si esta prestado
    if (!libro1.disponible) {
        throw new ErrorLibroDisponible("Se encuentra ocupado");
    }

    console.log("Validacion correcta");

} catch (error) {
    console.error("Error:", error.message);
}


// ---------------- CLASE USUARIO ----------------

class ValidacionErrores extends Error{
    constructor(message){
        super(message);
        this.nombre=ValidacionErrores;
        this.codigo=404;
    }
}

//todas las palabras de "Error" se cambiaran por el nombre de la clase
class usuario{
    constructor(nombre,edad,email,passsword){
        if(!nombre || nombre.length<3)
        {
            throw new ValidacionErrores ("El nombre debe de tener al menos 3 caracteres")
        }
        if(edad<18){
            throw new ValidacionErrores("Debe ser mayor de edad")
        }
        if(!email.includes("@")){
            throw new ValidacionErrores ("El formato del correo no es valido")
        }
        if(!passsword || passsword.length <6){
            throw new ValidacionErrores("La contraseña debe ser mayor a 6 caracteres")
        }
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
        this.passsword=passsword;
    }
    setModificarPassword(newPassword){
        const ValidarUser=/[?/*,$#]/;
        if(newPassword.length<6){
            throw new ValidacionErrores ("Debe de tener mas de 6 caracteres")
        }
        if(!ValidarUser.test(newPassword)){
            throw new ValidacionErrores ("El password debe incluir un caracter especial")
        }
        this.passsword=newPassword
    }
}

try{
    console.log("\ncreando usuario...");
    const user=new usuario ("Fanny",20,"@tefa","2345*345");
    user.setModificarPassword("tefa*13")
    console.log("usuario:", user);
    console.log("usuario creado con exito");

}catch(error){
    console.error("No se cumple con el objetivo:" , error.message);
}

