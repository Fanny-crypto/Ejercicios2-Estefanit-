/** hacer el area y perimetro de un rectangulo utilizando clases de yess */
class Rectangulo{
constructor (base, altura) {
    this.base=base;
    this.altura=altura
}
calcularArea(){
    return this.base*this.altura;
    }
calcularper(){
    return (2*this.base) + (2*this.altura);
    }
 get obtenerArea(){
    return this.calcularArea;
}
get obtenerper(){
    return this.calcularper;
}
}
let rectangulo1=new Rectangulo (35,40);
let area = rectangulo1.obtenerArea;
let per = rectangulo1.obtenerper;

console.log(rectangulo1.obtenerArea());
console.log(rectangulo1.calcularper());

