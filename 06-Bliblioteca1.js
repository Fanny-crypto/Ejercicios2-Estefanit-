/**Biblioteca */
class Material {
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
console.log(revista1.mostrarInfoRevis());



