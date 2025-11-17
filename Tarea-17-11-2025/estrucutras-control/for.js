/*
        ESTRUCTURA DE CONTROL: for - Bucle con contador
        
        La estructura for ejecuta un bloque de código un número determinado de veces.
        Sintaxis: for (inicialización; condición; incremento) { código }
        
        Scope: Las variables declaradas con let, const dentro del bloque for tienen Block Scope.
        La variable del contador declarada en la inicialización también tiene Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Contador simple

console.log("************ Ejemplo for básico *************");
console.log("************ Ejemplo for básico *************");

for (let i = 0; i < 5; i++) {
    console.log("Iteración: " + i);
}

console.log("************ FIN Ejemplo for básico *************");
console.log("************ FIN Ejemplo for básico *************");
console.log("************ FIN Ejemplo for básico *************");

// 2.- EJEMPLO: Recorrer array

console.log("************ Ejemplo for recorrer array *************");
console.log("************ Ejemplo for recorrer array *************");

let frutas = ["manzana", "banana", "naranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta " + i + ": " + frutas[i]);
}

console.log("************ FIN Ejemplo for recorrer array *************");
console.log("************ FIN Ejemplo for recorrer array *************");
console.log("************ FIN Ejemplo for recorrer array *************");

// 3.- SCOPE DENTRO DE FOR: Variables con Block Scope

console.log("************ Ejemplo scope en for *************");
console.log("************ Ejemplo scope en for *************");

// La variable i declarada en la inicialización del for tiene Block Scope
// Solo existe dentro del bloque del for y en cada iteración
for (let i = 0; i < 3; i++) {
    let multiplicacion = i * 2;  // Variable con Block Scope - se crea en cada iteración
    const resultado = multiplicacion + 10;  // Constante con Block Scope - se crea en cada iteración
    console.log("i = " + i + ", resultado = " + resultado);
}

// La variable i declarada en el for no es accesible fuera del bloque
// console.log(i);  // Error: i is not defined
// console.log(multiplicacion);  // Error: multiplicacion is not defined
// console.log(resultado);  // Error: resultado is not defined

console.log("************ FIN Ejemplo scope en for *************");
console.log("************ FIN Ejemplo scope en for *************");
console.log("************ FIN Ejemplo scope en for *************");

// 4.- EJEMPLO: Suma de números

console.log("************ Ejemplo for suma *************");
console.log("************ Ejemplo for suma *************");

let suma = 0;

for (let numero = 1; numero <= 10; numero++) {
    suma = suma + numero;
}

console.log("Suma de 1 a 10: " + suma);

console.log("************ FIN Ejemplo for suma *************");
console.log("************ FIN Ejemplo for suma *************");
console.log("************ FIN Ejemplo for suma *************");

// 5.- EJEMPLO: Contador decreciente

console.log("************ Ejemplo for decreciente *************");
console.log("************ Ejemplo for decreciente *************");

for (let i = 10; i >= 1; i--) {
    console.log("Cuenta regresiva: " + i);
}

console.log("************ FIN Ejemplo for decreciente *************");
console.log("************ FIN Ejemplo for decreciente *************");
console.log("************ FIN Ejemplo for decreciente *************");

// 6.- EJEMPLO: Incremento personalizado

console.log("************ Ejemplo for incremento personalizado *************");
console.log("************ Ejemplo for incremento personalizado *************");

for (let i = 0; i < 20; i += 2) {
    console.log("Números pares: " + i);
}

console.log("************ FIN Ejemplo for incremento personalizado *************");
console.log("************ FIN Ejemplo for incremento personalizado *************");
console.log("************ FIN Ejemplo for incremento personalizado *************");

// 7.- FOR ANIDADO: Bucles dentro de bucles

console.log("************ Ejemplo for anidado *************");
console.log("************ Ejemplo for anidado *************");

// Los bucles anidados crean scopes anidados
// La variable i del bucle externo es accesible en el bucle interno
// La variable j del bucle interno solo existe dentro de su bucle
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i = " + i + ", j = " + j);
    }
    // j no es accesible aquí
    // console.log(j);  // Error: j is not defined
}

console.log("************ FIN Ejemplo for anidado *************");
console.log("************ FIN Ejemplo for anidado *************");
console.log("************ FIN Ejemplo for anidado *************");

// 8.- FOR CON BREAK: Salida anticipada

console.log("************ Ejemplo for con break *************");
console.log("************ Ejemplo for con break *************");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Sale del bucle cuando i es 5
    }
    console.log("Número: " + i);
}

console.log("************ FIN Ejemplo for con break *************");
console.log("************ FIN Ejemplo for con break *************");
console.log("************ FIN Ejemplo for con break *************");

// 9.- FOR CON CONTINUE: Saltar iteración

console.log("************ Ejemplo for con continue *************");
console.log("************ Ejemplo for con continue *************");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Salta los números pares
    }
    console.log("Número impar: " + i);
}

console.log("************ FIN Ejemplo for con continue *************");
console.log("************ FIN Ejemplo for con continue *************");
console.log("************ FIN Ejemplo for con continue *************");

// 10.- FOR SIN INICIALIZACIÓN: Variable declarada fuera

console.log("************ Ejemplo for sin inicialización *************");
console.log("************ Ejemplo for sin inicialización *************");

// Cuando la variable se declara fuera del for, tiene scope del módulo
// Es accesible después del bucle
let k = 0;
for (; k < 5; k++) {
    console.log("k = " + k);
}

console.log("Valor final de k: " + k);  // k es accesible aquí

console.log("************ FIN Ejemplo for sin inicialización *************");
console.log("************ FIN Ejemplo for sin inicialización *************");
console.log("************ FIN Ejemplo for sin inicialización *************");

