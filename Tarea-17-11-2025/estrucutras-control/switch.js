/*
        ESTRUCTURA DE CONTROL: switch - Selección múltiple
        
        La estructura switch permite ejecutar diferentes bloques de código según el valor de una expresión.
        Sintaxis: switch (expresión) { case valor: código; break; default: código; }
        
        IMPORTANTE: Se debe usar break después de cada case para evitar que se ejecuten los siguientes casos.
        Scope: Las variables declaradas con let, const dentro de cada case tienen Block Scope.
*/

// 1.- EJEMPLO BÁSICO: Días de la semana

console.log("************ Ejemplo switch básico *************");
console.log("************ Ejemplo switch básico *************");

let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana laboral");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día laboral");
}

console.log("************ FIN Ejemplo switch básico *************");
console.log("************ FIN Ejemplo switch básico *************");
console.log("************ FIN Ejemplo switch básico *************");

// 2.- EJEMPLO: Calificaciones

console.log("************ Ejemplo switch calificaciones *************");
console.log("************ Ejemplo switch calificaciones *************");

let nota = 85;

switch (true) {
    case nota >= 90:
        console.log("Calificación: A");
        break;
    case nota >= 80:
        console.log("Calificación: B");
        break;
    case nota >= 70:
        console.log("Calificación: C");
        break;
    default:
        console.log("Calificación: D");
}

console.log("************ FIN Ejemplo switch calificaciones *************");
console.log("************ FIN Ejemplo switch calificaciones *************");
console.log("************ FIN Ejemplo switch calificaciones *************");

// 3.- SCOPE DENTRO DE SWITCH: Variables con Block Scope

console.log("************ Ejemplo scope en switch *************");
console.log("************ Ejemplo scope en switch *************");

let opcion = 2;

// IMPORTANTE: En switch, cada case comparte el mismo scope
// Para crear Block Scope independiente en cada case, se deben usar llaves { }
switch (opcion) {
    case 1: {
        let mensaje = "Opción uno";  // Block Scope con llaves - solo existe en este case
        const valor = 10;
        console.log(mensaje + ": " + valor);
        break;
    }
    case 2: {
        let mensaje = "Opción dos";  // Puede usar el mismo nombre por Block Scope independiente
        const valor = 20;
        console.log(mensaje + ": " + valor);
        break;
    }
    default:
        console.log("Opción no válida");
}

// Las variables declaradas dentro de los cases con llaves no son accesibles fuera
// console.log(mensaje);  // Error: mensaje is not defined
// console.log(valor);  // Error: valor is not defined

// La variable opcion declarada fuera del switch es accesible
console.log("Opción seleccionada: " + opcion);

console.log("************ FIN Ejemplo scope en switch *************");
console.log("************ FIN Ejemplo scope en switch *************");
console.log("************ FIN Ejemplo scope en switch *************");

// 4.- EJEMPLO: Operaciones matemáticas

console.log("************ Ejemplo switch operaciones *************");
console.log("************ Ejemplo switch operaciones *************");

let operacion = "sumar";
let a = 10;
let b = 5;
let resultado;

switch (operacion) {
    case "sumar":
        resultado = a + b;
        console.log("Suma: " + resultado);
        break;
    case "restar":
        resultado = a - b;
        console.log("Resta: " + resultado);
        break;
    case "multiplicar":
        resultado = a * b;
        console.log("Multiplicación: " + resultado);
        break;
    case "dividir":
        resultado = a / b;
        console.log("División: " + resultado);
        break;
    default:
        console.log("Operación no válida");
}

console.log("************ FIN Ejemplo switch operaciones *************");
console.log("************ FIN Ejemplo switch operaciones *************");
console.log("************ FIN Ejemplo switch operaciones *************");

// 5.- EJEMPLO: Múltiples casos sin break (fall-through)

console.log("************ Ejemplo switch fall-through *************");
console.log("************ Ejemplo switch fall-through *************");

let mes = 2;

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Mes con 31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Mes con 30 días");
        break;
    case 2:
        console.log("Mes con 28 o 29 días");
        break;
    default:
        console.log("Mes no válido");
}

console.log("************ FIN Ejemplo switch fall-through *************");
console.log("************ FIN Ejemplo switch fall-through *************");
console.log("************ FIN Ejemplo switch fall-through *************");

// 6.- EJEMPLO: Estados de usuario

console.log("************ Ejemplo switch estados *************");
console.log("************ Ejemplo switch estados *************");

let estado = "activo";

switch (estado) {
    case "activo":
        console.log("Usuario activo");
        break;
    case "inactivo":
        console.log("Usuario inactivo");
        break;
    case "suspendido":
        console.log("Usuario suspendido");
        break;
    case "eliminado":
        console.log("Usuario eliminado");
        break;
    default:
        console.log("Estado desconocido");
}

console.log("************ FIN Ejemplo switch estados *************");
console.log("************ FIN Ejemplo switch estados *************");
console.log("************ FIN Ejemplo switch estados *************");

