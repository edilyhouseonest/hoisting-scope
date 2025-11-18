console.log("Hola mundo")

// Hoisting en JavaScript

// El hoisting es el comportamiento por el cual JavaScript “mueve” las declaraciones al inicio del scope (función o script) durante la fase de compilación.

// var: se “hoistea” la declaración, pero no la asignación.

console.log(x); // undefined
var x = 5;


// Internamente se interpreta como:

var x;
console.log(x); // undefined
x = 5;


// *************  con let

console.log(yy); //  XXXX   ReferenceError
let yy = 5;


// Internamente ocurre esto:

// La declaración de `y` se hoistea, pero entra en la TDZ (Temporal Dead Zone)
// console.log(yy); // ReferenceError: Cannot access 'y' before initialization
// let yy = 5;      // recién aquí se inicializa



// function: las funciones declaradas se hoistean completas (declaración + cuerpo).

saludar(); // funciona
function saludar() { console.log("Hola"); }


// TDZ (Temporal Dead Zone)

// La Zona Muerta Temporal es el período entre el inicio del scope y la declaración real de una variable con let o const. Durante ese tiempo, la variable existe en memoria, pero no puede usarse.
// ** Periodo de tiempo entre el inicio del scope o el inicio del ambito (donde se declaran las variables) La variable existe pero no puede ser usada

// Ejemplo:

console.log(y); // ReferenceError
let y = 10;


/*
La variable y está “reservada” en el scope desde el inicio (por hoisting).

Pero no se puede acceder hasta que se ejecute su declaración → eso es la TDZ.
*/

/*

var: hoisting → inicializa en undefined.  NO TIENE TDZ

let / const: hoisting → pero entran en TDZ hasta que se declaran.

Funciones declaradas: se hoistean completas y pueden usarse antes de su definición.

*/

/*

 Diferencia clave

    var: se hoistea y se inicializa en undefined. Podés acceder antes de la asignación (aunque da undefined).

    let / const: se hoistean, pero no se inicializan. Quedan en la TDZ hasta que se ejecuta la línea de declaración. Acceder antes lanza ReferenceError.

*/

// Con var
console.log(a); // undefined
var a = 10;

// Con let
console.log(b); //  ReferenceError
let b = 10;


