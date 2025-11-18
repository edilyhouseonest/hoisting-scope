// Alcance de var en JavaScript
//     Si declarás var dentro de una función → la variable queda con scope de función (solo accesible dentro de esa función).
//     Si declarás var fuera de cualquier función → la variable se convierte en global (en navegador se agrega a window, en Node.js a global).
/*   SCOPE */

console.log("************************************************");


// Declaración global con var
var miVar3 = "hola desde fuera de la función";

console.log(miVar3); //  imprime la variable global

function mostrar(){
    // var aquí toma el scope de la función (función scope)
    // básicamente se crea otra variable (local) y solo exisste en esta funcion
    var miVar3 = "** hola desde dentro de la función ***";
    console.log(miVar3); // -> imprime la variable local de la función
    return miVar3;
}

console.log("Ya afuera de la primera funcion: " +  miVar3); // -> sigue siendo la global
const miPaiz = mostrar();           // -> ejecuta la función y muestra la local
console.log(miVar3); // -> la global nunca cambió
console.log("Experimentando: " + miPaiz)



console.log("************************************************");

// Ejemplo con let

// Declaración global con let
let saludo = "hola desde fuera con let";

console.log(saludo); // -> imprime la global

function mostrarLet(){
    // let aquí toma el scope del bloque (block scope)
    let saludo = "** hola desde dentro con let ***";
    console.log(saludo); // -> imprime la variable local del bloque
}

console.log(saludo); // -> sigue siendo la global
mostrarLet();        // -> ejecuta la función y muestra la local
console.log(saludo); // -> la global nunca cambió


// ******************* *********** ************* ************ ********
// Ejemplo con const
// Declaración global con const
const mensaje = "hola desde fuera con const";

console.log(mensaje); // -> imprime la global

function mostrarConst(){
    // const aquí toma el scope del bloque (block scope)
    const mensaje = "** hola desde dentro con const ***";
    console.log(mensaje); // -> imprime la variable local del bloque
}

console.log(mensaje); // -> sigue siendo la global
mostrarConst();       // -> ejecuta la función y muestra la local
console.log(mensaje); // -> la global nunca cambió


// Arrow function con let
let texto = "fuera con arrow";

const mostrarArrow = () => {
    // let aquí es block scope
    let texto = "** dentro con arrow ***";
    console.log(texto); // -> imprime la local
};

console.log(texto);   // -> global
mostrarArrow();       // -> local
console.log(texto);   // -> global intacta


// Arrow function con const y diferente nombre
const dato = "fuera con arrow const";

const imprimirDato = () => {
    const dato = "** dentro con arrow const ***";
    console.log(dato); // -> imprime la local
};

console.log(dato);    // -> global
imprimirDato();       // -> local
console.log(dato);    // -> global intacta


// var → scope de función, ignora bloques (if, for).

// let y const → scope de bloque, más seguros.

// Arrow functions → se comportan igual que funciones normales en cuanto a scope de variables, pero no tienen su propio this (heredan el del contexto donde se crean).

/*
    1-. SCOPE, TODOS LOS TIPOS DE SCOPE QUE EXISTEN
        1.1 scope-function
        1.2 scrope-block
    2-. ESTRUCUTRAS DE CONTROL JAVASCRIPT otra carpeta o respositorio
        2.1 scope-if.js
            for.js
            while.js

    scrum fundamentals certified  subir la certificiación al grupo DOS MESES MAXIMO
    


*/