
//Funciones cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

function diagonalCuadrado(lado) {
    return lado * Math.sqrt(2);
}

console.groupEnd();

//Funciones Triángulo
console.group("Triángulos");

const PI = Math.PI;

function perimetroTriangulo(lado) {
    return lado * 3;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Funciones Círculo
console.group("Círculos");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

function diametroCirculo(radio) {
    return radio * 2;
}

console.groupEnd();


// Funciones Rectangulo
console.group("Rectángulos");

function areaRectangulo(base, altura) {
    return base * altura;
}

function perimetroRectangulo(base, altura) {
    return (base * altura) * 2;
}

function diagonalRectangulo(base, altura) {
    return  Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
 
}

console.groupEnd();


// Funciones Óvalo
console.group("Óvalos");


function areaOvalo(radio1, radio2) {
    return (radio1 * radio2) * PI;
}

function perimetroOvalo(radio1, radio2) {
    const operacionInterna = (((radio1*radio1) + (radio2*radio2))) / 2;
    const raizOperacion = (Math.sqrt(operacionInterna));
    return (2 * PI * raizOperacion);
}

function diametroOvalo(radio1, radio2) {
    return  radio1 * radio2;
 
}

console.groupEnd();


// Funciones Trapecio
console.group("Trapecios");


function areaTrapecio(base1, base2, altura) {
    return parseFloat(base1) + parseFloat(base2) / 2 * parseFloat(altura) ;
}

function perimetroTrapecio(base1, base2, lado1, lado2) {
    return parseFloat(base1) + parseFloat(base2) + parseFloat(lado1) + parseFloat(lado2);
}

console.groupEnd();

// Funciones Pentágono
console.group("Pentagonos");


function areaPentagono(lado) {
    const angulo =  360 / 10;
    const teta = angulo * (PI / 180);
    console.log(teta);
    const apotema = lado / (2 * Math.tan(teta));
    console.log(apotema);
    return (5 * lado * apotema) / 2;

}

function perimetroPentagono(lado) {
    return lado * 5;
}

console.groupEnd();


// Funciones Hexágonos
console.group("Hexagonos");


function areaHexagono(lado) {
    const angulo =  360 / 12;
    const teta = angulo * (PI / 180);
    console.log(teta);
    const apotema = lado / (2 * Math.tan(teta));
    console.log(apotema);
    return (6 * lado * apotema) / 2;

}

function perimetroHexagono(lado) {
    return lado * 6;
}

console.groupEnd();


// Funciones Rombos
console.group("Rombos");


function areaRombo(diagonalMayor, diagonalMenor) {

    return diagonalMayor * diagonalMenor / 2;

}

function perimetroRombo(lado) {
    
    return lado * 4;
}

console.groupEnd();


// FInal de las funciones



//  Funciones que enlazan al HTML del circulo


function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}


//Funciones que enlazan al HTML del triángulo

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTrianguloLado");
    const input2 = document.getElementById("inputTrianguloAltura");
    const value = input.value;
    const value2 = input2.value;

    const area = areaTriangulo(value, value2);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTrianguloLado");
    const value = input.value;
    
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}


//Funciones que enlazan al HTML del Rectangulo

function calcularAreaRectangulo() {
    const input = document.getElementById("inputRectanguloBase");
    const input2 = document.getElementById("inputRectanguloAltura");
    const value = input.value;
    const value2 = input2.value;

    const area = areaRectangulo(value, value2);
    alert(area);
}

function calcularPerimetroRectangulo() {
    const input = document.getElementById("inputRectanguloBase");
    const input2 = document.getElementById("inputRectanguloAltura");
    const value = input.value;
    const value2 = input2.value;

    const perimetro = perimetroRectangulo(value, value2);
    alert(perimetro);
}

function calcularDiagonalRectangulo() {
    const input = document.getElementById("inputRectanguloBase");
    const input2 = document.getElementById("inputRectanguloAltura");
    const value = input.value;
    const value2 = input2.value;

    const perimetro = diagonalRectangulo(value, value2);
    alert(perimetro);
}


//Funciones que enlazan al HTML del cuadrado


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadradoLado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadradoLado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularDiagonalCuadrado() {
    const input = document.getElementById("inputCuadradoLado");
    const value = input.value;

    const diagonal = diagonalCuadrado(value);
    alert(diagonal);
}


//Funciones que enlazan al HTML del Óvalo

function calcularAreaOvalo() {
    const input1 = document.getElementById("inputOvaloRadio1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputOvaloRadio2");
    const value2 = input2.value;

    const area = areaOvalo(value1, value2);
    alert(area);

}

function calcularPerimetroOvalo() {
    const input1 = document.getElementById("inputOvaloRadio1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputOvaloRadio2");
    const value2 = input2.value;

    const perimetro = perimetroOvalo(value1, value2);
    alert(perimetro);
}

function calcularDiametroOvalo() {
    const input1 = document.getElementById("inputOvaloRadio1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputOvaloRadio2");
    const value2 = input2.value;

    const diametro = diametroOvalo(value1, value2);
    alert(diametro);
}


//Funciones que enlazan al HTML del Trapecio

function calcularAreaTrapecio() {
    const input1 = document.getElementById("inputTrapecioBase1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputTrapecioBase2");
    const value2 = input2.value;
    const input3 = document.getElementById("inputTrapecioAltura");
    const value3 = input3.value;
    

    const area = areaTrapecio(value1, value2, value3);
    alert(area);
}

function calcularPerimetroTrapecio() {
    const input1 = document.getElementById("inputTrapecioBase1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputTrapecioBase2");
    const value2 = input2.value;
    const input3 = document.getElementById("inputTrapecioLado1");
    const value3 = input3.value;
    const input4 = document.getElementById("inputTrapecioLado2");
    const value4 = input4.value;

    const perimetro = perimetroTrapecio(value1, value2, value3, value4);
    alert(perimetro);
}

//Funciones que enlazan al HTML del Pentágono

function calcularAreaPentagono() {
    const input1 = document.getElementById("inputPentagonoLado");
    const value1 = input1.value;

    const area = areaPentagono(value1);
    alert(area);
}

function calcularPerimetroPentagono() {
    const input1 = document.getElementById("inputPentagonoLado");
    const value1 = input1.value;

    const perimetro = perimetroPentagono(value1);
    alert(perimetro);
}

//Funciones que enlazan al HTML del Hexagono

function calcularAreaHexagono() {
    const input1 = document.getElementById("inputHexagonoLado");
    const value1 = input1.value;

    const area = areaHexagono(value1);
    alert(area);
}

function calcularPerimetroHexagono() {
    const input1 = document.getElementById("inputHexagonoLado");
    const value1 = input1.value;

    const perimetro = perimetroHexagono(value1);
    alert(perimetro);
}


//Funciones que enlazan al HTML del Rombo

function calcularAreaRombo() {
    const input1 = document.getElementById("inputRomboDiagonalMayor");
    const value1 = input1.value;
    const input2 = document.getElementById("inputRomboDiagonalMenor");
    const value2 = input2.value;

    const area = areaRombo(value1, value2);
    alert(area);
}

function calcularPerimetroRombo() {
    const input1 = document.getElementById("inputRomboLado");
    const value1 = input1.value;

    const perimetro = perimetroRombo(value1);
    alert(perimetro);
}