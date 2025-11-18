/*
        ESTRUCTURA DE CONTROL: for...of - Iteración sobre elementos iterables
        
        La estructura for...of itera sobre los valores de objetos iterables como arrays, strings, etc.
        Sintaxis: for (variable of iterable) { código }
        
        Diferencia con for...in: for...of itera sobre valores, for...in itera sobre claves/índices.
        Scope: Las variables declaradas con let, const dentro del bloque for...of tienen Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Iterar sobre array

console.log("************ Ejemplo for of básico *************");
console.log("************ Ejemplo for of básico *************");

let frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

console.log("************ FIN Ejemplo for of básico *************");
console.log("************ FIN Ejemplo for of básico *************");
console.log("************ FIN Ejemplo for of básico *************\n");

// 2.- EJEMPLO: Iterar sobre string

console.log("************ Ejemplo for of string *************");
console.log("************ Ejemplo for of string *************");

let texto = "Hola";

for (let caracter of texto) {
    console.log("Carácter: " + caracter);
}

console.log("************ FIN Ejemplo for of string *************");
console.log("************ FIN Ejemplo for of string *************");
console.log("************ FIN Ejemplo for of string *************\n");

// 3.- SCOPE DENTRO DE FOR...OF: Variables con Block Scope

console.log("************ Ejemplo scope en for of *************");
console.log("************ Ejemplo scope en for of *************");

let numeros = [1, 2, 3, 4, 5];

// La variable numero declarada en el for...of tiene Block Scope
// Solo existe dentro del bloque del for...of
// IMPORTANTE: var NO tiene Block Scope, tiene Function Scope o Global Scope
// Si se usa var en el for...of, la variable se elevaría (hoisting) al scope de la función o al global
// si no hay función, y sería accesible fuera del bucle, creando posibles "fugas" de variables
for (let numero of numeros) {
    // var cuadradoVar = numero * numero;  // Con var no hay Block Scope, se elevaría al scope superior
    let cuadrado = numero * numero;  // Variable con Block Scope - se crea en cada iteración
    const resultado = cuadrado + 10;  // Constante con Block Scope - se crea en cada iteración
    console.log("Número: " + numero + ", resultado: " + resultado);
}

// Las variables declaradas dentro del for...of no son accesibles fuera
// console.log(numero);  // Error: numero is not defined
// console.log(cuadrado);  // Error: cuadrado is not defined
// console.log(resultado);  // Error: resultado is not defined

// El array numeros declarado fuera del for...of es accesible
console.log("Array numeros: " + numeros);

console.log("************ FIN Ejemplo scope en for of *************");
console.log("************ FIN Ejemplo scope en for of *************");
console.log("************ FIN Ejemplo scope en for of *************\n");

// 4.- EJEMPLO: Suma de elementos de array

console.log("************ Ejemplo for of suma *************");
console.log("************ Ejemplo for of suma *************");

let valores = [10, 20, 30, 40];
let suma = 0;

for (let valor of valores) {
    suma = suma + valor;
}

console.log("Suma total: " + suma);

console.log("************ FIN Ejemplo for of suma *************");
console.log("************ FIN Ejemplo for of suma *************");
console.log("************ FIN Ejemplo for of suma *************\n");

// 5.- EJEMPLO: Buscar elemento en array

console.log("************ Ejemplo for of búsqueda *************");
console.log("************ Ejemplo for of búsqueda *************");

let colores = ["rojo", "verde", "azul", "amarillo"];
let buscado = "azul";
let encontrado = false;

for (let color of colores) {
    if (color === buscado) {
        encontrado = true;
        console.log("Color encontrado: " + color);
        break;
    }
}

console.log("************ FIN Ejemplo for of búsqueda *************");
console.log("************ FIN Ejemplo for of búsqueda *************");
console.log("************ FIN Ejemplo for of búsqueda *************\n");

// 6.- EJEMPLO: Modificar array durante iteración (crear nuevo array)

console.log("************ Ejemplo for of modificar *************");
console.log("************ Ejemplo for of modificar *************");

let numeros2 = [1, 2, 3, 4, 5];
let numerosDobles = [];

for (let num of numeros2) {
    numerosDobles.push(num * 2);
}

console.log("Números dobles: " + numerosDobles);

console.log("************ FIN Ejemplo for of modificar *************");
console.log("************ FIN Ejemplo for of modificar *************");
console.log("************ FIN Ejemplo for of modificar *************\n");

// 7.- EJEMPLO: Iterar sobre array de objetos

console.log("************ Ejemplo for of array objetos *************");
console.log("************ Ejemplo for of array objetos *************");

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 28 }
];

for (let persona of personas) {
    console.log(persona.nombre + " tiene " + persona.edad + " años");
}

console.log("************ FIN Ejemplo for of array objetos *************");
console.log("************ FIN Ejemplo for of array objetos *************");
console.log("************ FIN Ejemplo for of array objetos *************\n");

// 8.- EJEMPLO: for...of con índices usando entries()

console.log("************ Ejemplo for of entries *************");
console.log("************ Ejemplo for of entries *************");

let frutas2 = ["manzana", "banana", "naranja"];

for (let [indice, fruta] of frutas2.entries()) {
    console.log("Índice " + indice + ": " + fruta);
}

console.log("************ FIN Ejemplo for of entries *************");
console.log("************ FIN Ejemplo for of entries *************");
console.log("************ FIN Ejemplo for of entries *************\n");

// 9.- EJEMPLO: Iterar sobre Set

console.log("************ Ejemplo for of Set *************");
console.log("************ Ejemplo for of Set *************");

let conjunto = new Set([1, 2, 3, 4, 5]);

for (let elemento of conjunto) {
    console.log("Elemento del Set: " + elemento);
}

console.log("************ FIN Ejemplo for of Set *************");
console.log("************ FIN Ejemplo for of Set *************");
console.log("************ FIN Ejemplo for of Set *************\n");

// 10.- EJEMPLO: Iterar sobre Map

console.log("************ Ejemplo for of Map *************");
console.log("************ Ejemplo for of Map *************");

let mapa = new Map();
mapa.set("a", 1);
mapa.set("b", 2);
mapa.set("c", 3);

for (let [clave, valor] of mapa) {
    console.log("Clave: " + clave + ", Valor: " + valor);
}

console.log("************ FIN Ejemplo for of Map *************");
console.log("************ FIN Ejemplo for of Map *************");
console.log("************ FIN Ejemplo for of Map *************\n");

