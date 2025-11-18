/*
        ESTRUCTURA DE CONTROL: if - Condicional simple
        
        La estructura if permite ejecutar un bloque de código solo si se cumple una condición.
        Sintaxis: if (condición) { código }
        
        Scope: Las variables declaradas con let, const dentro del bloque if tienen Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Condición simple

console.log("************ Ejemplo if básico *************");
console.log("************ Ejemplo if básico *************");

let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad");
}

console.log("************ FIN Ejemplo if básico *************");
console.log("************ FIN Ejemplo if básico *************");
console.log("************ FIN Ejemplo if básico *************\n");

// 2.- EJEMPLO CON ELSE: Condición alternativa

console.log("************ Ejemplo if else *************");
console.log("************ Ejemplo if else *************");

let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace calor");
} else {
    console.log("Temperatura normal");
}

console.log("************ FIN Ejemplo if else *************");
console.log("************ FIN Ejemplo if else *************");
console.log("************ FIN Ejemplo if else *************\n");

// 3.- EJEMPLO CON ELSE IF: Múltiples condiciones

console.log("************ Ejemplo if else if *************");
console.log("************ Ejemplo if else if *************");

let nota = 85;

if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else if (nota >= 70) {
    console.log("Calificación: C");
} else {
    console.log("Calificación: D");
}

console.log("************ FIN Ejemplo if else if *************");
console.log("************ FIN Ejemplo if else if *************");
console.log("************ FIN Ejemplo if else if *************\n");

// 4.- SCOPE DENTRO DE IF: Variables con Block Scope

console.log("************ Ejemplo scope en if *************");
console.log("************ Ejemplo scope en if *************");

let numero = 10;

// Las variables declaradas con let y const dentro del bloque if tienen Block Scope
// Esto significa que solo existen dentro de las llaves { } del if
// IMPORTANTE: var NO tiene Block Scope, tiene Function Scope o Global Scope
// Si se usa var dentro del if, la variable se elevaría (hoisting) al scope de la función o al global
// si no hay función, creando posibles "fugas" de variables
if (numero > 5) {
    // var mensajeVar = "Con var no hay Block Scope";  // Con var se elevaría al scope superior
    let mensaje = "El número es mayor que 5";  // Variable con Block Scope - solo existe aquí
    const resultado = numero * 2;  // Constante con Block Scope - solo existe aquí
    console.log(mensaje);
    console.log("Resultado: " + resultado);
}

// Las variables declaradas dentro del if no son accesibles fuera del bloque
// console.log(mensaje);  // Error: mensaje is not defined
// console.log(resultado);  // Error: resultado is not defined

// La variable numero declarada fuera del if es accesible en todo el scope del módulo
console.log("Número fuera del if: " + numero);

console.log("************ FIN Ejemplo scope en if *************");
console.log("************ FIN Ejemplo scope en if *************");
console.log("************ FIN Ejemplo scope en if *************\n");

// 5.- OPERADORES LÓGICOS EN CONDICIONES

console.log("************ Ejemplo operadores lógicos *************");
console.log("************ Ejemplo operadores lógicos *************");

let usuario = "admin";
let password = "1234";

if (usuario === "admin" && password === "1234") {
    console.log("Acceso concedido");
}

let dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
    console.log("Es fin de semana");
}

console.log("************ FIN Ejemplo operadores lógicos *************");
console.log("************ FIN Ejemplo operadores lógicos *************");
console.log("************ FIN Ejemplo operadores lógicos *************\n");

// 6.- CONDICIONES CON OPERADOR TERNARIO

console.log("************ Ejemplo operador ternario *************");
console.log("************ Ejemplo operador ternario *************");

let edad2 = 20;
let mensaje2 = edad2 >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje2);

console.log("************ FIN Ejemplo operador ternario *************");
console.log("************ FIN Ejemplo operador ternario *************");
console.log("************ FIN Ejemplo operador ternario *************\n");

// 7.- IF ANIDADO

console.log("************ Ejemplo if anidado *************");
console.log("************ Ejemplo if anidado *************");

let tienePermiso = true;
let esAdmin = false;

// Los if anidados crean scopes anidados
// Las variables del if externo son accesibles en el if interno
// Las variables del if interno no son accesibles en el if externo
// IMPORTANTE: var NO tiene Block Scope, si se usa var en un if anidado, la variable se elevaría
// al scope de la función o al global si no hay función, y sería accesible fuera de todos los if
if (tienePermiso) {
    if (esAdmin) {
        // var nivelAccesoVar = "completo";  // Con var se elevaría al scope superior, no tendría Block Scope
        let nivelAcceso = "completo";  // Block Scope del if interno
        console.log("Acceso completo de administrador");
    } else {
        let nivelAcceso = "limitado";  // Block Scope del if interno (diferente del anterior)
        console.log("Acceso limitado");
    }
} else {
    console.log("Sin acceso");
}

console.log("************ FIN Ejemplo if anidado *************");
console.log("************ FIN Ejemplo if anidado *************");
console.log("************ FIN Ejemplo if anidado *************\n");

