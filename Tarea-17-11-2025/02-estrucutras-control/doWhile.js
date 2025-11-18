/*
        ESTRUCTURA DE CONTROL: do...while - Bucle con evaluación al final
        
        La estructura do...while ejecuta el bloque de código al menos una vez,
        y luego evalúa la condición para decidir si continuar.
        Sintaxis: do { código } while (condición);
        
        Diferencia con while: do...while garantiza al menos una ejecución del bloque.
        Scope: Las variables declaradas con let, const dentro del bloque do tienen Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Ejecución garantizada

console.log("************ Ejemplo do while básico *************");
console.log("************ Ejemplo do while básico *************");

let contador = 0;

do {
    console.log("Contador: " + contador);
    contador++;
} while (contador < 5);

console.log("************ FIN Ejemplo do while básico *************");
console.log("************ FIN Ejemplo do while básico *************");
console.log("************ FIN Ejemplo do while básico *************\n");

// 2.- EJEMPLO: Diferencia con while - condición falsa desde el inicio

console.log("************ Ejemplo do while ejecución garantizada *************");
console.log("************ Ejemplo do while ejecución garantizada *************");

let numero = 10;

// Con do...while se ejecuta al menos una vez
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);  // La condición es falsa, pero ya se ejecutó una vez

console.log("************ FIN Ejemplo do while ejecución garantizada *************");
console.log("************ FIN Ejemplo do while ejecución garantizada *************");
console.log("************ FIN Ejemplo do while ejecución garantizada *************\n");

// 3.- SCOPE DENTRO DE DO...WHILE: Variables con Block Scope

console.log("************ Ejemplo scope en do while *************");
console.log("************ Ejemplo scope en do while *************");

let i = 0;

// Las variables declaradas con let y const dentro del bloque do tienen Block Scope
// Cada iteración crea un nuevo scope para las variables declaradas dentro
do {
    // var valor = i * 3; //  con var no hay blockscope, el hoisting la elevaría al global si no hay función y aunque undefined la variable se podría utilizar e incluso reasignar creando una fuga
    // si el var esta dentro de una función este se eleva a la funcion y si no hay funcion pues se eleva al global
    let valor = i * 3;  // Variable con Block Scope - se crea en cada iteración  -- Esto evita errores comunes de variables “fugas” que ocurrían con var. 
    const resultado = valor + 5;  // Constante con Block Scope - se crea en cada iteración
    console.log("Iteración " + i + ": resultado = " + resultado);
    i++;
} while (i < 3);

// Las variables declaradas dentro del do no son accesibles fuera del bloque
// console.log(valor);  // Error: valor is not defined
// console.log(resultado);  // Error: resultado is not defined
// La variable i declarada fuera del do es accesible después del bucle

console.log("Valor final de i: " + i);

console.log("************ FIN Ejemplo scope en do while *************");
console.log("************ FIN Ejemplo scope en do while *************");
console.log("************ FIN Ejemplo scope en do while *************\n");

// 4.- EJEMPLO: Menú interactivo simulado


console.log("************ Ejemplo do while menú *************");
console.log("************ Ejemplo do while menú *************");
console.log("************ MENÚ SIMULADO CON do...while *************\n");

/* ***********    si se cambia este numero el while va a seguir infinito,, no cambiar la variable opcion 3         *************/
let opcion = 3; // simulamos que el usuario empieza en la opción 1

do {
    console.log("Menú:");
    console.log("1. Mostrar saludo");
    console.log("2. Mostrar suma");
    console.log("3. Salir");

    // simulación de cambio de opción
    if (opcion === 1) {
        console.log("Hola, bienvenido al menú!");
        opcion = 2; // cambiamos la opción para la siguiente vuelta
    } else if (opcion === 2) {
        let resultado = 10 + 20;
        console.log("Resultado de la suma: " + resultado);
        opcion = 3; // ahora simulamos que elige salir
    }

} while (opcion !== 3);

console.log("************ FIN MENÚ *************");


console.log("************ FIN Ejemplo do while menú *************");
console.log("************ FIN Ejemplo do while menú *************");
console.log("************ FIN Ejemplo do while menú *************\n");



// 5.- DO...WHILE CON BREAK: Salida anticipada

console.log("************ Ejemplo do while con break *************");
console.log("************ Ejemplo do while con break *************\n");

let j = 0;

do {
    console.log("Iteración: " + j);
    j++;
    
    if (j >= 5) {
        break;  // Sale del bucle
    }
} while (true);

console.log("Bucle terminado");

console.log("************ FIN Ejemplo do while con break *************");
console.log("************ FIN Ejemplo do while con break *************");
console.log("************ FIN Ejemplo do while con break *************\n");

// 7.- DO...WHILE CON CONTINUE: Saltar iteración

console.log("************ Ejemplo do while con continue *************");
console.log("************ Ejemplo do while con continue *************");

let k = 0;

do {
    k++;
    
    if (k % 2 === 0) {
        continue;  // Salta los números pares
    }
    
    console.log("Número impar: " + k);
} while (k < 10);

console.log("************ FIN Ejemplo do while con continue *************");
console.log("************ FIN Ejemplo do while con continue *************");
console.log("************ FIN Ejemplo do while con continue *************\n");

