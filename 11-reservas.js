class Reserva {
    static reservas = [];
    constructor (nombre,apellido,cuPersonas,fecha,hora){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cuPersonas=cuPersonas;
        this.fecha=fecha;
        this.hora=hora;
    }
    static AgregarReservas(reserva){
        this.reservas.push(reserva);
    }
    mostrarInfo(){
return `cliente ${this.nombre}, Personas ${this.apellido},
Cantidad de personas ${this.cuPersonas}, dia de la reservacion ${this.fecha},
hora de la reservacion ${this.hora}`;

}
}
class ReservaNormal extends Reserva{
    constructor(nombre,apellido,cuPersonas,fecha,hora){
        super(nombre,apellido,cuPersonas,fecha,hora);
    
    }
    mostrarInfo(){
    return`[Reserva Normal] ${super.mostrarInfo()}`;
    }
}

class ReservaVIP extends Reserva{
    constructor(nombre,apellido,cuPersonas,fecha,hora,Beneficio){
        super(nombre,apellido,cuPersonas,fecha,hora);
        this.Beneficio=Beneficio; //postre de cortesia
    }
    mostrarInfo(){
        return `\n[Reserva VIP] ${super.mostrarInfo()},Beneficio: ${this.Beneficio}`; 
    }
}

class ReservaEventoGrande extends Reserva {
    constructor(nombre,apellido,cuPersonas,fecha,hora,espacioAsignado,TipoEvento){
        super(nombre,apellido,cuPersonas,fecha,hora);
        this.espacioAsignado=espacioAsignado;
        this.TipoEvento=TipoEvento;
    }
    mostrarInfo(){
        return `[Reserva Eventos Grandes] ${super.mostrarInfo()}, Tipo de Evento: ${this.TipoEvento},
    \nEspacio para las personas: ${this.espacioAsignado}`;
    }
}

const reseNormal1 = new ReservaNormal ("Lolita", "Perez", 10, "26/09/24", "9:30");
const reseVIP2 = new ReservaVIP ("Lolito", "Lima", 8,"26/09/24", "8:30", "Se les ofrece postre de cortesia");
const resEvento3 =new ReservaEventoGrande("Lilina", "Perelina", 30, "24/12/24", "9:30", "Salon de fiestas", "Posada Navideña")

//registro usando el metodo estatico del padre
Reserva.AgregarReservas(reseNormal1);
Reserva.AgregarReservas(reseVIP2);
Reserva.AgregarReservas(resEvento3);

//probar operaciones
console.log("\n--- OPERACIONES DE PRUEBA ---");
console.log(reseNormal1.mostrarInfo());  
console.log(reseVIP2.mostrarInfo());     
console.log(resEvento3.mostrarInfo());   

//recorrer el arreglo.map
console.log("Todas las Reservas");

Reserva.reservas.map((reservas, index)=>
{
    console.log(`${index + 1}. ${reservas.mostrarInfo()}`);
});


