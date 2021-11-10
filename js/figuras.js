
// código del cuadrado
console.group("cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 7;
const alturaTriangulo = 5;

console.log(
    "El lado 1 del triángulo mide : " 
    + ladoTriangulo1 
    + "cm"
    + ", el lado 2 del triángulo mide : " 
    + ladoTriangulo2 
    + "cm"
    + " la base del tiángulo mide : " 
    + baseTriangulo
    + "cm"
    + " y la altura del tiángulo mide : " 
    + alturaTriangulo
    + "cm."
);


const perimetroTrianguloEquilatero = ladoTriangulo1 * 3;
console.log("El perimetro del triángulo equilátero es: " + perimetroTrianguloEquilatero + "cm");

const perimetroTrianguloIsosceles = (ladoTriangulo1 * 2) + baseTriangulo;
console.log("El perimetro del triángulo isósceles es: " + perimetroTrianguloIsosceles + "cm");

const perimetroTrianguloEscaleno = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo escaleno es: " + perimetroTrianguloEscaleno + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();


//Código del circulo

console.group("círculos");

const radioCirculo = 4;
const PI = Math.PI;

console.log("El radio de la circunferencia es: " + radioCirculo);

const perimetroCirculo = 2 * PI * radioCirculo;
console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");

const areaCirculo = PI * (radioCirculo*radioCirculo);
console.log("El área del circulo es : " + areaCirculo + "cm^2");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es : " + diametroCirculo + "cm");

console.groupEnd();