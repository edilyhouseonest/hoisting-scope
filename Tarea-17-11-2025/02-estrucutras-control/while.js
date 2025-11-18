/*
        ESTRUCTURA DE CONTROL: while - Bucle condicional
        
        La estructura while ejecuta un bloque de código mientras se cumpla una condición.
        Sintaxis: while (condición) { código }
        
        IMPORTANTE: Se debe asegurar que la condición cambie dentro del bucle para evitar bucles infinitos.
        Scope: Las variables declaradas con let, const dentro del bloque while tienen Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Contador simple

console.log("************ Ejemplo while básico *************");
console.log("************ Ejemplo while básico *************");

let contador = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;  // Incrementa el contador para evitar bucle infinito
}

console.log("************ FIN Ejemplo while básico *************");
console.log("************ FIN Ejemplo while básico *************");
console.log("************ FIN Ejemplo while básico *************\n");

// 2.- EJEMPLO: Suma acumulativa

console.log("************ Ejemplo while suma acumulativa *************");
console.log("************ Ejemplo while suma acumulativa *************");

let suma = 0;
let numero = 1;

while (numero <= 10) {
    suma = suma + numero;
    numero++;
}

console.log("Suma de 1 a 10: " + suma);

console.log("************ FIN Ejemplo while suma acumulativa *************");
console.log("************ FIN Ejemplo while suma acumulativa *************");
console.log("************ FIN Ejemplo while suma acumulativa *************\n");

// 3.- SCOPE DENTRO DE WHILE: Variables con Block Scope

console.log("************ Ejemplo scope en while *************");
console.log("************ Ejemplo scope en while *************");

let i = 0;

// Las variables declaradas con let y const dentro del bloque while tienen Block Scope
// Cada iteración crea un nuevo scope para las variables declaradas dentro
// IMPORTANTE: var NO tiene Block Scope, tiene Function Scope o Global Scope
// Si se usa var dentro del while, la variable se elevaría (hoisting) al scope de la función o al global
// si no hay función, y sería accesible fuera del bucle, creando posibles "fugas" de variables
while (i < 3) {
    // var valorVar = i * 2;  // Con var no hay Block Scope, se elevaría al scope superior
    let valor = i * 2;  // Variable con Block Scope - se crea en cada iteración
    const resultado = valor + 10;  // Constante con Block Scope - se crea en cada iteración
    console.log("Iteración " + i + ": valor = " + valor + ", resultado = " + resultado);
    i++;
}

// Las variables declaradas dentro del while no son accesibles fuera del bloque
// console.log(valor);  // Error: valor is not defined
// console.log(resultado);  // Error: resultado is not defined

// La variable i declarada fuera del while es accesible después del bucle
console.log("Valor final de i: " + i);

console.log("************ FIN Ejemplo scope en while *************");
console.log("************ FIN Ejemplo scope en while *************");
console.log("************ FIN Ejemplo scope en while *************\n");

// 4.- EJEMPLO: Búsqueda en array

console.log("************ Ejemplo while búsqueda *************");
console.log("************ Ejemplo while búsqueda *************");

let numeros = [1, 3, 5, 7, 9, 11];
let indice = 0;
let encontrado = false;

while (indice < numeros.length && !encontrado) {
    if (numeros[indice] === 7) {
        encontrado = true;
        console.log("Número 7 encontrado en la posición: " + indice);
    }
    indice++;
}

console.log("************ FIN Ejemplo while búsqueda *************");
console.log("************ FIN Ejemplo while búsqueda *************");
console.log("************ FIN Ejemplo while búsqueda *************\n");

// 5.- EJEMPLO: Validación de entrada

console.log("************ Ejemplo while validación *************");
console.log("************ Ejemplo while validación *************");

let entrada = "";
let intentos = 0;

while (entrada !== "salir" && intentos < 5) {
    entrada = "salir";  // Simulación de entrada
    intentos++;
    console.log("Intento: " + intentos);
}

console.log("************ FIN Ejemplo while validación *************");
console.log("************ FIN Ejemplo while validación *************");
console.log("************ FIN Ejemplo while validación *************\n");

// 6.- WHILE CON BREAK: Salida anticipada

console.log("************ Ejemplo while con break *************");
console.log("************ Ejemplo while con break *************");

let contador2 = 0;

while (true) {
    console.log("Iteración: " + contador2);
    contador2++;
    
    if (contador2 >= 5) {
        break;  // Sale del bucle
    }
}

console.log("Bucle terminado");

console.log("************ FIN Ejemplo while con break *************");
console.log("************ FIN Ejemplo while con break *************");
console.log("************ FIN Ejemplo while con break *************\n");

// 7.- WHILE CON CONTINUE: Saltar iteración

console.log("************ Ejemplo while con continue *************");
console.log("************ Ejemplo while con continue *************");

let j = 0;

while (j < 10) {
    j++;
    
    if (j % 2 === 0) {
        continue;  // Salta los números pares
    }
    
    console.log("Número impar: " + j);
}

console.log("************ FIN Ejemplo while con continue *************");
console.log("************ FIN Ejemplo while con continue *************");
console.log("************ FIN Ejemplo while con continue *************\n");

