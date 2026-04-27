//clase padre
class PersonalMedico {
    static registrar = [] //actua como base de datos significa q se comparte con todas las instancias
//metodo constructor
constructor(id,nombre,edad,depart){
    this.id=id;
    this.nombre=nombre;
    this.edad=edad;
    this.depart=depart;
  }
//metodo estatico para comprobar
static registro(obj){
    this.registrar.push(obj);  //Object.assign(this,{}) para no agregar this.string uno por uno
 }
}


//subclase o clase hija Doctor
class Doctor extends PersonalMedico {
    constructor (id,nombre,edad,depart,especialidad,cargo){
        super(id,nombre,edad,depart); //llama al constructor padre
        this.especialidad=especialidad; //Object.assign(this,{}) para no agregar this.string uno por uno
        this.cargo=cargo;
    }
    diagnostico() {
    console.log(`${this.nombre} diagnostica` );
    }
    cirujia() {
        console.log(`${this.nombre} del tipo estable`);
    }
    alta() {
        console.log(`${this.nombre} se puede dar de alta`); // son polismorfismo por la difrencia segun el objeto q lo llame
    }
}


//subclase o clase hija Enfermero 
class Enfermero extends PersonalMedico {
    constructor(id,nombre,edad,depart,turno,especialidad){
        super(id,nombre,edad,depart); //llama al constructor padre
        Object.assign(this,{turno,especialidad}); //forma corta para asignar varias propiedades y no escribir this.nombre o uno por uno
    }
    cantidadPacientes() {
        console.log(`${this.nombre} se le asigna la unidad`);
    }
    curar() {
        console.log(`${this.nombre} cuida y acompaña`);
    }
    asistentes() {
        console.log(`${this.nombre} asiste al paciente`)
    }
}

// arreglo de doctor y enfermero
const doc1 = new Doctor (1,"Mario Hugo",45,8,"cirujias","departamento de traumas")
const enf1 = new Enfermero (1,"Maria Cardenas",3,8,"matutino","enfermera")
PersonalMedico.registro(doc1); PersonalMedico.registro(enf1); //del metodo estatico


//registro utilizando el metodo del padre (por cigarros)
PersonalMedico.registro(doc1);
PersonalMedico.registro(enf1);


// PROBAR OPERACIONES
console.log("\n--- OPERACIONES DE PRUEBA ---");
doc1.diagnostico();  
doc1.cirujia();     
enf1.curar();   
enf1.asistentes();


