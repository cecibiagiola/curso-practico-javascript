// Codigo del cuadraro

console.group('Cuadrados')
/* const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm') */

function perimetroCuadrado(lado){
    return lado * 4;
} 


//console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm')



function areaCuadraro(lado){
    return lado * lado;
} 


//console.log('El area del cuadrado es: ' + areaCuadraro + 'cm2')

console.groupEnd();
// Codigo del triangulo

 console.group('Triangulo')

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4; */


/* console.log(
    'Los lados del triangulo miden: '
     + ladoTriangulo1 
     + 'cm, ' 
     + ladoTriangulo2 
     + 'cm, ' 
     + baseTriangulo3 
     + 'cm '
); */

//const alturaTriangulo = 5.5;
//console.log('La altura del triangulo es de: ' + alturaTriangulo + 'cm')

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
//console.log('El area del triangulo es: ' + areaTriangulo + 'cm2');

console.groupEnd();

// Codigo del circulo

console.group('Circulo');

// Radio
/* const radioCirculo = 4;
console.log('El radio del circulo mide: ' + radioCirculo + 'cm'); */

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

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;


    const perimetro = areaCuadrado(value);
    alert(area);
}
