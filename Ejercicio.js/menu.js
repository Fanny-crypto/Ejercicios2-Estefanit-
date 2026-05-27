import promptSync from "prompt-sync";
const prompt = promptSync();

class ErrorRestaurante extends Error{
    constructor(message){ super(this.message); this.nombre = "ErrorRestaurante"; this.codigo = 404; }
}

const precios = { sencilla:15, queso:18, especial:20, papas:8, refresco:5, postre:6 };

let mesas = [ {numero:1, pedidos:[]}, {numero:2, pedidos:[]}, {numero:3, pedidos:[]}, {numero:4, pedidos:[]}, {numero:5, pedidos:[]} ];

function setNumeroMesa(numero){
    if(numero < 1 || numero > 5 || isNaN(numero)) throw new ErrorRestaurante("Número de mesa debe ser entre 1 y 5");
    return numero;
}

function getMesa(numero){
    return mesas.find(m => m.numero === numero) || null;
}

function agregarPedido(mesa, tipo, cantidad){
    let lista = Object.keys(precios);
    if(!lista.includes(tipo)) throw new ErrorRestaurante("Producto no existe: usa " + lista.join(", "));
    if(cantidad <= 0 || isNaN(cantidad) || cantidad % 1 !== 0) throw new ErrorRestaurante("Cantidad debe ser número entero mayor a 0");
    
    let subtotal = cantidad * precios[tipo];
    mesa.pedidos.push({producto: tipo, cantidad, precio: precios[tipo], subtotal});
}

function calcularTotal(mesa){
    return mesa.pedidos.reduce((total, p) => total + p.subtotal, 0);
}

function mostrarCuenta(mesa){
    console.log("\n=====================================");
    console.log(`          MESA N° ${mesa.numero}`);
    console.log("=====================================");
    console.log("Producto           Cant.  P/U  Subtotal");
    console.log("-------------------------------------");
    
    mesa.pedidos.forEach(p => {
        let nombres = {sencilla:"Hamburguesa sencilla", queso:"Hamburguesa con queso", especial:"Hamburguesa especial", papas:"Papas fritas", refresco:"Refresco", postre:"Postre"};
        let nom = nombres[p.producto].padEnd(20);
        console.log(`${nom} ${String(p.cantidad).padStart(4)}  ${String(p.precio).padStart(2)}  ${String(p.subtotal).padStart(4)}`);
    });
    
    console.log("-------------------------------------");
    console.log(`TOTAL A PAGAR:    $${calcularTotal(mesa)}`);
    console.log("=====================================");
}

let opcion;
do{
    console.log("\n=========== RESTAURANTE ==========");
    console.log("1. Agregar Pedido\n2. Mostrar Cuenta\n3. Salir");
    opcion = parseInt(prompt("Seleccione opción: "));

    switch(opcion){
        case 1:
            try {
                let num = setNumeroMesa(parseInt(prompt("Número de mesa (1-5): ")));
                let mesa = getMesa(num);
                if(!mesa) throw new ErrorRestaurante("Mesa no encontrada");
                
                let tipo = prompt("Producto: ");
                let cant = parseInt(prompt("Cantidad: "));
                agregarPedido(mesa, tipo, cant);
                console.log("Pedido agregado");
            } catch (e) { console.log(`\nERROR ${e.nombre}: ${e.message}`); }
            break;
        
        case 2:
            try {
                let num = setNumeroMesa(parseInt(prompt("Número de mesa: ")));
                let mesa = getMesa(num);
                if(!mesa) throw new ErrorRestaurante("Mesa no encontrada");
                mesa.pedidos.length ? mostrarCuenta(mesa) : console.log("\nSin pedidos registrados");
            } catch (e) { console.log(`\nERROR ${e.nombre}: ${e.message}`); }
            break;
        
        case 3: console.log("\nFin de ejecución"); break;
        default: console.log("\nOpción no válida");
    }
}while(opcion !== 3)

