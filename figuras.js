// Codigo del cuadraro

console.group('Cuadrados')


function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 


console.groupEnd();


// Codigo del triangulo
console.group('Triangulo')


function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


console.groupEnd();


// Codigo del Circulo
console.group('Circulo');


//Diametro

function diametroCirculo(radio){
    return radio * 2;
}


//PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactamos con el HTML

//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

//triangulo 

function calcularPerimetroTriangulo() {
    const input = document.getElementById('inputTriangulo1');
    const value = input.value;

    const input2 = document.getElementById('inputTriangulo2');
    const value2 = input2.value;

    const input3 = document.getElementById('inputTrianguloBase');
    const value3 = input3.value;


    const perimetro = perimetroTriangulo(value, value2, value3);
    alert (perimetro)
}

function calcularAreaTriangulo() {

    const inputBase = document.getElementById('inputTrianguloBase');
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById('inputTrianguloAltura');
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// circulo

function calcularPerimetroCirculo(){
    const radio = document.getElementById('inputRadio');
    const value = radio.value;

    const diametro = perimetroCirculo(value);
    alert(diametro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadio');
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}








