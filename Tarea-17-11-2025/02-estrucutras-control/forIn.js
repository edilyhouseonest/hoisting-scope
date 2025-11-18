/*
        ESTRUCTURA DE CONTROL: for...in - Iteración sobre propiedades de objetos
        
        La estructura for...in itera sobre las propiedades enumerables de un objeto.
        Sintaxis: for (variable in objeto) { código }
        
        IMPORTANTE: for...in itera sobre las claves (keys) del objeto, no sobre los valores.
        Scope: Las variables declaradas con let, const dentro del bloque for...in tienen Block Scope.
*/

/*      Para los siguientes ejemplos iteramos variables o objetos, declarados fuera de la estrucutra de control     */

// 1.- EJEMPLO BÁSICO: Iterar sobre propiedades de objeto

console.log("************ Ejemplo for in básico *************");
console.log("************ Ejemplo for in básico *************");

let persona = {
    nombre: "Edy",
    edad: 30,
    profesion: "Alcalde de: ",
    ciudad: "Chinautla"
};

for (let dato in persona) {
    console.log(dato + ": " + persona[dato]);
}

console.log("************ FIN Ejemplo for in básico *************");
console.log("************ FIN Ejemplo for in básico *************");
console.log("************ FIN Ejemplo for in básico *************\n");

// 2.- EJEMPLO: Acceso a valores usando la clave

console.log("************ Ejemplo for in acceso valores *************");
console.log("************ Ejemplo for in acceso valores *************");

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

for (let clave in auto) {
    console.log(clave + " = " + auto[clave]);
}

console.log("************ FIN Ejemplo for in acceso valores *************");
console.log("************ FIN Ejemplo for in acceso valores *************");
console.log("************ FIN Ejemplo for in acceso valores *************\n");

// 3.- SCOPE DENTRO DE FOR...IN: Variables con Block Scope

console.log("************ Ejemplo scope en for in *************");
console.log("************ Ejemplo scope en for in *************");



let datos = {
    a: 10,
    b: 20,
    c: 30
};

// La variable key declarada en el for...in tiene Block Scope
// Solo existe dentro del bloque del for...in
// IMPORTANTE: var NO tiene Block Scope, tiene Function Scope o Global Scope
// Si se usa var en el for...in, la variable se elevaría (hoisting) al scope de la función o al global
// si no hay función, y sería accesible fuera del bucle, creando posibles "fugas" de variables
for (let key in datos) {
    // var valorVar = datos[key] * 2;  // Con var no hay Block Scope, se elevaría al scope superior
    let valor = datos[key] * 2;  // Variable con Block Scope - se crea en cada iteración
    const resultado = valor + 5;  // Constante con Block Scope - se crea en cada iteración
    console.log(key + ": " + datos[key] + " -> " + resultado);
}

// Las variables declaradas dentro del for...in no son accesibles fuera
// console.log(key);  // Error: key is not defined
// console.log(valor);  // Error: valor is not defined
// console.log(resultado);  // Error: resultado is not defined

// El objeto datos declarado fuera del for...in es accesible
console.log("Objeto datos: " + JSON.stringify(datos));

console.log("************ FIN Ejemplo scope en for in *************");
console.log("************ FIN Ejemplo scope en for in *************");
console.log("************ FIN Ejemplo scope en for in *************\n");

// 4.- EJEMPLO: Contar propiedades de un objeto

console.log("************ Ejemplo for in contar propiedades *************");
console.log("************ Ejemplo for in contar propiedades *************");

let telefonos = {
    trabajo: "2484589625",
    celular: "53906587",
    casa: "14523698"
};

let contador = 0;

for (let tel in telefonos) {
    contador++;
}

console.log("Números de Telefonos del contacto contacto: " + contador);

console.log("************ FIN Ejemplo for in contar propiedades *************");
console.log("************ FIN Ejemplo for in contar propiedades *************");
console.log("************ FIN Ejemplo for in contar propiedades *************\n");

// 5.- EJEMPLO: Filtrar propiedades

console.log("************ Ejemplo for in filtrar *************");
console.log("************ Ejemplo for in filtrar *************");

let configuracion = {
    tema: "oscuro",
    idioma: "español",
    notificaciones: true,
    sonido: false
};

for (let opcion in configuracion) {
    if (configuracion[opcion] === true) {
        console.log(opcion + " está activado");
    }
}

console.log("************ FIN Ejemplo for in filtrar *************");
console.log("************ FIN Ejemplo for in filtrar *************");
console.log("************ FIN Ejemplo for in filtrar *************\n");

// 6.- EJEMPLO: Modificar valores durante la iteración

console.log("************ Ejemplo for in modificar *************");
console.log("************ Ejemplo for in modificar *************");

let numeros = {
    a: 1,
    b: 2,
    c: 3
};

for (let clave in numeros) {
    numeros[clave] = numeros[clave] * 2;
    console.log(clave + ": " + numeros[clave]);
}

console.log("************ FIN Ejemplo for in modificar *************");
console.log("************ FIN Ejemplo for in modificar *************");
console.log("************ FIN Ejemplo for in modificar *************\n");

// 7.- EJEMPLO: Verificar si una propiedad existe

console.log("************ Ejemplo for in hasOwnProperty *************");
console.log("************ Ejemplo for in hasOwnProperty *************");

let usuario = {
    nombre: "Ana",
    email: "ana@example.com"
};

for (let propiedad in usuario) {
    if (usuario.hasOwnProperty(propiedad)) {
        console.log("Propiedad propia: " + propiedad);
    }
}

console.log("************ FIN Ejemplo for in hasOwnProperty *************");
console.log("************ FIN Ejemplo for in hasOwnProperty *************");
console.log("************ FIN Ejemplo for in hasOwnProperty *************\n");

// 8.- NOTA: for...in con arrays (no recomendado)

console.log("************ Ejemplo for in con arrays *************");
console.log("************ Ejemplo for in con arrays *************");

let array = [10, 20, 30];

for (let indice in array) {
    console.log("Índice: " + indice + ", Valor: " + array[indice]);
}

// Para arrays es mejor usar for...of o for tradicional

console.log("************ FIN Ejemplo for in con arrays *************");
console.log("************ FIN Ejemplo for in con arrays *************");
console.log("************ FIN Ejemplo for in con arrays *************\n");

