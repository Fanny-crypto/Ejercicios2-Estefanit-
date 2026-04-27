class Personas {
  static clientes = []; // propiedad estática

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  guardarDatos() {
    Personas.clientes.push(this);
  }

  static obtenerDatos() {
    Personas.clientes.map(cliente => {
      console.log(`El nombre del cliente es ${cliente.nombre} y tiene ${cliente.edad} años.`);
    });
  }
}

// Crear instancias y guardarlas
new Personas("Lola", 30).guardarDatos();
new Personas("Razas", 25).guardarDatos();
new Personas("Tera", 40).guardarDatos();

// Obtener y mostrar los datos
Personas.obtenerDatos();



