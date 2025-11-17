/*
        ESTRUCTURAS DE CONTROL: break y continue
        
        break: Termina la ejecución de algún  bucle o estructura de control actual.
        continue: Salta el resto de la iteración actual y continúa con la siguiente.
        
        Scope: break y continue afectan el flujo de control pero no crean nuevos scopes.
*/

// 1.- BREAK EN FOR: Salir del bucle




console.log("************ Ejemplo de break *************");
console.log("************ TABLA DE MULTIPLICAR CORTADA *************");

// cambia el valor de cortador .... para cortar el flujo de for
let cortador = 6;

for (let i = 1; i < 10; i++) {
    if (i === cortador) {
        break;  // Sale del bucle cuando i es 5
    }

    console.log(`${i} * ${i} = ${i * i}`);
}

console.log("************ FIN Ejemplo de break for *************");
console.log("************ FIN Ejemplo de break for *************");
console.log("************ FIN Ejemplo de break for *************");

// 2.- BREAK EN WHILE: Salir del bucle

console.log("************ Ejemplo de break while *************");
console.log("************ Ejemplo de break while *************");

let contador = 0;

while (contador < 10) {
    if (contador === 7) {
        break;  // Sale del bucle
    }
    console.log("Contador: " + contador);
    contador++;
}
console.log("************ FIN Ejemplo de break while *************");
console.log("************ FIN Ejemplo de break while *************");
console.log("************ FIN Ejemplo de break while *************");


// 3.- BREAK EN SWITCH: Evitar fall-through

console.log("************ Ejemplo de break SWITCH *************");
console.log("************ Ejemplo de break SWITCH *************");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Opción 1");
        break;  // Evita que se ejecuten los siguientes casos
    case 2:
        console.log("Opción 2");
        break;
    default:
        console.log("Opción por defecto");
}


console.log("************ FIN Ejemplo de SWITCH *************");
console.log("************ FIN Ejemplo de SWITCH *************");
console.log("************ FIN Ejemplo de SWITCH *************");

// 4.- CONTINUE EN FOR: Saltar iteración

console.log("************ Ejemplo continue en for *************");
console.log("************ Ejemplo continue en for *************");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Salta los números pares
    }
    console.log("Número impar: " + i);
}

console.log("************ FIN Ejemplo continue en for *************");
console.log("************ FIN Ejemplo continue en for *************");
console.log("************ FIN Ejemplo continue en for *************");

// 5.- CONTINUE EN WHILE: Saltar iteración

console.log("************ Ejemplo continue en while *************");
console.log("************ Ejemplo continue en while *************");

let j = 0;

while (j < 10) {
    j++;
    
    if (j % 3 === 0) {
        continue;  // Salta múltiplos de 3
    }
    
    console.log("Número: " + j);
}

console.log("************ FIN Ejemplo continue en while *************");
console.log("************ FIN Ejemplo continue en while *************");
console.log("************ FIN Ejemplo continue en while *************");

// 6.- CONTINUE CON ETIQUETAS: Saltar iteración de bucle externo

console.log("************ Ejemplo continue con etiquetas *************");
console.log("************ Ejemplo continue con etiquetas *************");

// Las etiquetas no crean nuevos scopes, solo permiten controlar el flujo
bucleExterno: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue bucleExterno;  // Salta a la siguiente iteración del bucle externo
        }
        console.log("i = " + i + ", j = " + j);
    }
}

console.log("************ FIN Ejemplo continue con etiquetas *************");
console.log("************ FIN Ejemplo continue con etiquetas *************");
console.log("************ FIN Ejemplo continue con etiquetas *************");

// 7.- BREAK CON ETIQUETAS: Salir de bucle anidado

console.log("************ Ejemplo break con etiquetas *************");
console.log("************ Ejemplo break con etiquetas *************");

bucleExterno2: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break bucleExterno2;  // Sale del bucle externo
        }
        console.log("i = " + i + ", j = " + j);
    }
}

console.log("************ FIN Ejemplo break con etiquetas *************");
console.log("************ FIN Ejemplo break con etiquetas *************");
console.log("************ FIN Ejemplo break con etiquetas *************");

// 8.- EJEMPLO PRÁCTICO: Buscar y salir

console.log("************ Ejemplo break búsqueda *************");
console.log("************ Ejemplo break búsqueda *************");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let buscado = 7;

for (let numero of numeros) {
    if (numero === buscado) {
        console.log("Número encontrado: " + numero);
        break;  // Sale del bucle al encontrar el número
    }
    console.log("Buscando... " + numero);
}

console.log("************ FIN Ejemplo break búsqueda *************");
console.log("************ FIN Ejemplo break búsqueda *************");
console.log("************ FIN Ejemplo break búsqueda *************");

// 9.- EJEMPLO PRÁCTICO: Filtrar con continue

console.log("************ Ejemplo continue filtrar *************");
console.log("************ Ejemplo continue filtrar *************");

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let valor of valores) {
    if (valor < 5) {
        continue;  // Salta valores menores a 5
    }
    console.log("Valor procesado: " + valor);
}

console.log("************ FIN Ejemplo continue filtrar *************");
console.log("************ FIN Ejemplo continue filtrar *************");
console.log("************ FIN Ejemplo continue filtrar *************");

