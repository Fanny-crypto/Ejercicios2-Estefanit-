import { ErrorRestaurante } from "./Error.js";

export class Mesa{
    //Encapsulamiento (propiedades privadas)
    #numeroMesa;
    #pedidos;
    #precios;

    constructor(numeroMesa){
        this.setNumeroMesa = numeroMesa; // Constructor llama al setter (IGUAL QUE EN TU CÓDIGO)
        this.#pedidos = []; // Arreglo para guardar los pedidos

        // Lista de precios definida
        this.#precios = {
            sencilla: 15,
            queso: 18,
            especial: 20,
            papas: 8,
            refresco: 5,
            postre: 6
        };
    }

    //Uso de los getters (mismo formato: get getAlgo)
    get getNumeroMesa(){
        return this.#numeroMesa
    }

    get getPedidos(){
        // Devolvemos copia para no modificar el original
        let copia = [];
        for(let i = 0; i < this.#pedidos.length; i++){
            copia[i] = this.#pedidos[i];
        }
        return copia;
    }

    //Uso de setters (mismo formato: set setAlgo)
    set setNumeroMesa(numero){
        // Validación igual a tu lógica, adaptada al ejercicio
        if(numero < 1 || numero > 5 || isNaN(numero)){
            throw new ErrorRestaurante("El número de mesa debe ser entre 1 y 5 y ser válido")
        }
        this.#numeroMesa = numero; // Asignación igual que en tu código
    }

    // Método para agregar pedido (con validaciones como en los setters)
    agregarPedido(tipoProducto, cantidad){
        // Validar que el producto exista (igual lógica que tu validación de vacío)
        let existe = false;
        let lista = ["sencilla", "queso", "especial", "papas", "refresco", "postre"];
        for(let i = 0; i < lista.length; i++){
            if(lista[i] === tipoProducto){
                existe = true;
                break;
            }
        }
        if(!existe){
            throw new ErrorRestaurante("El producto ingresado no existe en el menú")
        }

        // Validar cantidad (IGUAL a como validaste horas y pago)
        if(cantidad <= 0 || isNaN(cantidad)){
            throw new ErrorRestaurante("La cantidad debe ser mayor a 0 y un número válido")
        }
        if(cantidad % 1 !== 0){ // Verificar que sea entero
            throw new ErrorRestaurante("La cantidad debe ser un número entero")
        }

        // Calcular valores
        let precioUnitario;
        if(tipoProducto === "sencilla") precioUnitario = this.#precios.sencilla;
        if(tipoProducto === "queso") precioUnitario = this.#precios.queso;
        if(tipoProducto === "especial") precioUnitario = this.#precios.especial;
        if(tipoProducto === "papas") precioUnitario = this.#precios.papas;
        if(tipoProducto === "refresco") precioUnitario = this.#precios.refresco;
        if(tipoProducto === "postre") precioUnitario = this.#precios.postre;

        let subtotal = cantidad * precioUnitario;

        // Guardar pedido
        this.#pedidos.push({
            producto: tipoProducto,
            cantidad: cantidad,
            precio: precioUnitario,
            subtotal: subtotal
        });
    }

    //Métodos para calcular totales (IGUAL a tus métodos de sueldo)
    calcularTotalBruto(){
        let total = 0;
        for(let i = 0; i < this.#pedidos.length; i++){
            total = total + this.#pedidos[i].subtotal;
        }
        return total;
    }

    calcularDescuento(){
        // Ejemplo: descuento del 5% si supera los 100 pesos
        if(this.calcularTotalBruto() > 100){
            return this.calcularTotalBruto() * 0.05;
        }
        return 0;
    }

    calcularTotalFinal(){
        return this.calcularTotalBruto() - this.calcularDescuento();
    }

    // Método para mostrar cuenta
    mostrarCuenta(){
        console.log("\n=====================================");
        console.log("          MESA N° " + this.#numeroMesa);
        console.log("=====================================");
        console.log("Producto           Cant.  P/U  Subtotal");
        console.log("-------------------------------------");

        for(let i = 0; i < this.#pedidos.length; i++){
            let p = this.#pedidos[i];
            let nombre = "";
            if(p.producto === "sencilla") nombre = "Hamburguesa sencilla";
            if(p.producto === "queso") nombre = "Hamburguesa con queso";
            if(p.producto === "especial") nombre = "Hamburguesa especial";
            if(p.producto === "papas") nombre = "Papas fritas";
            if(p.producto === "refresco") nombre = "Refresco";
            if(p.producto === "postre") nombre = "Postre";
            
            while(nombre.length < 20) nombre += " ";
            let cant = "     " + p.cantidad;
            let prec = "    " + p.precio;
            let sub = "     " + p.subtotal;
            console.log(nombre + cant + prec + sub);
        }

        console.log("-------------------------------------");
        console.log("Total Bruto:      $" + this.calcularTotalBruto());
        console.log("Descuento:        $" + this.calcularDescuento());
        console.log("TOTAL A PAGAR:    $" + this.calcularTotalFinal());
        console.log("=====================================");
    }
}
