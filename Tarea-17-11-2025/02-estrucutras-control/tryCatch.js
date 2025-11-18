/*
        ESTRUCTURA DE CONTROL: try...catch...finally - Manejo de errores
        
        La estructura try...catch permite manejar errores que pueden ocurrir durante la ejecución.
        Sintaxis: try { código } catch (error) { manejo } finally { limpieza }
        
        Scope: Las variables declaradas con let, const dentro de try tienen Block Scope.
        El parámetro del catch tiene Catch Scope, solo existe dentro del bloque catch.
*/

// 1.- EJEMPLO BÁSICO: Capturar error

console.log("************ Ejemplo try catch básico *************");
console.log("************ Ejemplo try catch básico *************");

try {
    let resultado = 10 / 0;
    console.log("Resultado: " + resultado);
} catch (error) {
    console.log("Error capturado: " + error.message);
}

console.log("************ FIN Ejemplo try catch básico *************");
console.log("************ FIN Ejemplo try catch básico *************");
console.log("************ FIN Ejemplo try catch básico *************\n");

// 2.- EJEMPLO: División por cero y error personalizado

console.log("************ Ejemplo try catch error personalizado *************");
console.log("************ Ejemplo try catch error personalizado *************");

try {
    let a = 10;
    let b = 0;
    
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    
    let resultado = a / b;
    console.log("Resultado: " + resultado);
} catch (error) {
    console.log("Error: " + error.message);
}

console.log("************ FIN Ejemplo try catch error personalizado *************");
console.log("************ FIN Ejemplo try catch error personalizado *************");
console.log("************ FIN Ejemplo try catch error personalizado *************\n");

// 3.- SCOPE DENTRO DE TRY: Variables con Block Scope

console.log("************ Ejemplo scope en try *************");
console.log("************ Ejemplo scope en try *************");

try {
    let numero = 10;
    const valor = numero * 2;  // Variable con Block Scope - solo existe en el bloque try
    // var numeroVar = 10;  // Con var no hay Block Scope, se elevaría al scope de la función o al global
    // si no hay función, y sería accesible fuera del try...catch, creando posibles "fugas" de variables
    console.log("Valor: " + valor);
    
    // Simular error
    throw new Error("Error de prueba");
} catch (error) {
    // Las variables declaradas con let y const dentro del try no son accesibles en el catch
    // console.log(numero);  // Error: numero is not defined
    // console.log(valor);  // Error: valor is not defined
    console.log("Error capturado: " + error.message);
}

// Las variables del try tampoco son accesibles fuera del try...catch
// console.log(numero);  // Error: numero is not defined
// console.log(valor);  // Error: valor is not defined

console.log("************ FIN Ejemplo scope en try *************");
console.log("************ FIN Ejemplo scope en try *************");
console.log("************ FIN Ejemplo scope en try *************\n");

// 4.- CATCH SCOPE: El parámetro error tiene Catch Scope

console.log("************ Ejemplo catch scope *************");
console.log("************ Ejemplo catch scope *************");

try {
    let dato = "test";
    console.log(dato);
} catch (error) {
    // El parámetro error tiene Catch Scope - solo existe dentro del bloque catch
    // Cada catch puede tener su propio parámetro error con el mismo nombre
    console.log("Tipo de error: " + error.name);
    console.log("Mensaje: " + error.message);
}

// error no es accesible fuera del catch
// console.log(error);  // Error: error is not defined

console.log("************ FIN Ejemplo catch scope *************");
console.log("************ FIN Ejemplo catch scope *************");
console.log("************ FIN Ejemplo catch scope *************\n");

// 5.- EJEMPLO: Acceso a propiedad indefinida

console.log("************ Ejemplo try catch propiedad indefinida *************");
console.log("************ Ejemplo try catch propiedad indefinida *************");

try {
    let objeto = null;
    console.log(objeto.propiedad);  // Error: Cannot read property
} catch (error) {
    console.log("Error al acceder a propiedad: " + error.message);
}

console.log("************ FIN Ejemplo try catch propiedad indefinida *************");
console.log("************ FIN Ejemplo try catch propiedad indefinida *************");
console.log("************ FIN Ejemplo try catch propiedad indefinida *************\n");

// 6.- EJEMPLO: FINALLY - Código que siempre se ejecuta

console.log("************ Ejemplo try catch finally *************");
console.log("************ Ejemplo try catch finally *************");

try {
    let resultado = 10 / 2;
    console.log("Resultado: " + resultado);
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    // El bloque finally siempre se ejecuta, sin importar si hay error o no
    // Las variables declaradas aquí tienen Block Scope del finally
    console.log("Este código siempre se ejecuta");
}

console.log("************ FIN Ejemplo try catch finally *************");
console.log("************ FIN Ejemplo try catch finally *************");
console.log("************ FIN Ejemplo try catch finally *************\n");

// 7.- EJEMPLO: FINALLY con return

console.log("************ Ejemplo try catch finally return *************");
console.log("************ Ejemplo try catch finally return *************");

function ejemploFinally() {
    try {
        return "Retorno desde try";
    } catch (error) {
        return "Retorno desde catch";
    } finally {
        // Finally se ejecuta antes del return
        console.log("Finally se ejecuta antes del return");
    }
}

console.log(ejemploFinally());

console.log("************ FIN Ejemplo try catch finally return *************");
console.log("************ FIN Ejemplo try catch finally return *************");
console.log("************ FIN Ejemplo try catch finally return *************\n");

// 8.- EJEMPLO: Múltiples tipos de error

console.log("************ Ejemplo try catch tipos error *************");
console.log("************ Ejemplo try catch tipos error *************");

try {
    let valor = "abc";
    let numero = parseInt(valor);
    
    if (isNaN(numero)) {
        throw new TypeError("No es un número válido");
    }
    
    let resultado = numero / 0;
} catch (error) {
    // El parámetro error puede ser de diferentes tipos
    if (error instanceof TypeError) {
        console.log("Error de tipo: " + error.message);
    } else {
        console.log("Error general: " + error.message);
    }
}

console.log("************ FIN Ejemplo try catch tipos error *************");
console.log("************ FIN Ejemplo try catch tipos error *************");
console.log("************ FIN Ejemplo try catch tipos error *************\n");

// 9.- EJEMPLO: Try...catch anidado

console.log("************ Ejemplo try catch anidado *************");
console.log("************ Ejemplo try catch anidado *************");

// Los try...catch anidados crean scopes anidados
// Cada catch tiene su propio parámetro error con Catch Scope independiente
try {
    try {
        throw new Error("Error interno");
    } catch (errorInterno) {
        // errorInterno solo existe en este catch
        console.log("Error interno capturado: " + errorInterno.message);
        throw new Error("Error propagado");
    }
} catch (errorExterno) {
    // errorExterno solo existe en este catch (diferente de errorInterno)
    console.log("Error externo capturado: " + errorExterno.message);
}

console.log("************ FIN Ejemplo try catch anidado *************");
console.log("************ FIN Ejemplo try catch anidado *************");
console.log("************ FIN Ejemplo try catch anidado *************\n");

// 10.- EJEMPLO: Validación de entrada

console.log("************ Ejemplo try catch validación *************");
console.log("************ Ejemplo try catch validación *************");

function validarEdad(edad) {
    try {
        if (typeof edad !== "number") {
            throw new TypeError("La edad debe ser un número");
        }
        
        if (edad < 0) {
            throw new RangeError("La edad no puede ser negativa");
        }
        
        if (edad > 120) {
            throw new RangeError("La edad no puede ser mayor a 120");
        }
        
        console.log("Edad válida: " + edad);
        return true;
    } catch (error) {
        // El parámetro error tiene Catch Scope dentro de la función
        console.log("Error de validación: " + error.message);
        return false;
    }
}

validarEdad(25);
validarEdad(-5);
validarEdad("abc");

console.log("************ FIN Ejemplo try catch validación *************");
console.log("************ FIN Ejemplo try catch validación *************");
console.log("************ FIN Ejemplo try catch validación *************\n");

