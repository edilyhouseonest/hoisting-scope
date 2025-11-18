/*
        CLASS SCOPE - Ámbito de Clase: Las clases en JavaScript crean su propio ámbito (scope).
        
        El cuerpo de una clase tiene un ámbito especial donde:
        - Las propiedades y métodos declarados dentro de la clase pertenecen al ámbito de la clase
        - Las variables declaradas con let, const dentro de métodos pertenecen al ámbito del método (Function Scope)
        - Las propiedades de instancia (this.propiedad) pertenecen a cada instancia de la clase
        - Los métodos estáticos pertenecen a la clase misma, ----- *****  no a las instancias. *****  -------------
        
        IMPORTANTE: Las clases en JavaScript son "hoisted" de manera diferente a las funciones.
        A diferencia de las funciones declaradas, las clases NO se pueden usar antes de ser declaradas.
        
        Scope de Clase:
        - Class Scope: El cuerpo de la clase { ... }
        - Métodos de instancia: Tienen acceso a this y a otras propiedades/métodos de la clase
        - Métodos estáticos: No tienen acceso a this, pertenecen a la clase directamente
        - Propiedades privadas (#propiedad): Solo accesibles dentro de la clase (Node.js 12+)
*/

// 1.- EJEMPLO BÁSICO: Clase con CommonJS - Exportación de clase

// Ejemplo de clase con CommonJS
// class Calculadora {
//     constructor() {
//         this.resultado = 0;
//     }
//     
//     sumar(a, b) {
//         return a + b;
//     }
// }
// 
// module.exports = { Calculadora };

// 2.- EJEMPLO COMPLETO: Clase con múltiples métodos y propiedades

class Calculadora {
    // Constructor: Se ejecuta cuando se crea una nueva instancia
    // Las variables aquí son propiedades de la instancia (this.resultado)
    constructor() {
        this.resultado = 0;  // Propiedad de instancia - cada objeto tiene su propio resultado
        this.historial = []; // Propiedad de instancia - cada objeto tiene su propio historial
    }
    
    // Método de instancia: Tiene acceso a this y a todas las propiedades de la instancia
    sumar(a, b) {
        let suma = a + b;  // Variable local al método (Function Scope)
        this.resultado = suma;  // Accede a la propiedad de la instancia con this
        this.historial.push(`Suma: ${a} + ${b} = ${suma}`);
        return suma;
    }
    
    // Otro método de instancia
    restar(a, b) {
        let resta = a - b;  // Variable local al método
        this.resultado = resta;
        this.historial.push(`Resta: ${a} - ${b} = ${resta}`);
        return resta;
    }
    
    // Método estático: No tiene acceso a this, pertenece a la clase directamente
    // Se invoca con Calculadora.multiplicar(a, b), no desde una instancia
    static multiplicar(a, b) {
        return a * b;  // No puede usar this porque no hay instancia
    }
    
    // Getter: Permite acceder a propiedades como si fueran atributos
    get obtenerResultado() {
        return this.resultado;
    }
    
    // Método para obtener el historial
    obtenerHistorial() {
        return this.historial;
    }
}

// 3.- CREAR INSTANCIAS: Cada instancia tiene su propio scope de propiedades

let calculadora1 = new Calculadora();
let calculadora2 = new Calculadora();

// Cada instancia tiene su propio resultado e historial
calculadora1.sumar(10, 5);
calculadora2.sumar(20, 30);

console.log("************ Ejemplo de Scope de Clase *************");
console.log("Resultado calculadora1: " + calculadora1.obtenerResultado);
console.log("Resultado calculadora2: " + calculadora2.obtenerResultado);
console.log("Historial calculadora1: " + calculadora1.obtenerHistorial());
console.log("Historial calculadora2: " + calculadora2.obtenerHistorial());

// 4.- MÉTODOS ESTÁTICOS: Pertenecen a la clase, no a las instancias

console.log("************ Método Estático *************");
// Los métodos estáticos se invocan directamente desde la clase
let multiplicacion = Calculadora.multiplicar(5, 4);
console.log("Multiplicación (método estático): " + multiplicacion);

// Ejemplo de error al intentar usar método estático desde instancia:
// let error = calculadora1.multiplicar(5, 4); // TypeError: calculadora1.multiplicar is not a function

// 5.- SCOPE DENTRO DE MÉTODOS: Variables locales vs propiedades de instancia

class EjemploScope {
    constructor() {
        this.propiedadInstancia = "Soy propiedad de la instancia";
    }
    
    metodoEjemplo() {
        let variableLocal = "Soy variable local del método";  // Solo existe dentro de este método
        this.otraPropiedad = "Soy otra propiedad de instancia";  // Se agrega a la instancia
        
        console.log("Desde métodoEjemplo:");
        console.log("Variable local: " + variableLocal);
        console.log("Propiedad instancia: " + this.propiedadInstancia);
        console.log("Otra propiedad: " + this.otraPropiedad);
        
        // variableLocal solo existe aquí, fuera del método no existe
    }
}

let ejemplo = new EjemploScope();
ejemplo.metodoEjemplo();

// Ejemplo de error al acceder a variable local fuera del método:
// console.log(ejemplo.variableLocal); // undefined - variableLocal no existe fuera del método

// 6.- HERENCIA Y SCOPE: Las clases hijas heredan el scope de las clases padre

class CalculadoraAvanzada extends Calculadora {
    constructor() {
        super();  // Llama al constructor de la clase padre
        this.operacionesAvanzadas = [];
    }
    
    // Método nuevo en la clase hija
    potencia(base, exponente) {
        let resultado = Math.pow(base, exponente);
        this.resultado = resultado;
        this.historial.push(`Potencia: ${base}^${exponente} = ${resultado}`);
        this.operacionesAvanzadas.push(`Potencia: ${base}^${exponente}`);
        return resultado;
    }
    
    // Puede usar métodos heredados de la clase padre
    usarMetodoPadre(a, b) {
        return this.sumar(a, b);  // Accede al método sumar de la clase Calculadora
    }
}

let calcAvanzada = new CalculadoraAvanzada();
calcAvanzada.potencia(2, 3);
console.log("************ Herencia y Scope *************");
console.log("Resultado potencia: " + calcAvanzada.obtenerResultado);
console.log("Usando método heredado - Suma: " + calcAvanzada.usarMetodoPadre(10, 15));

// 7.- EXPORTACIÓN CON COMMONJS

// Exportar la clase para usarla en otros módulos
module.exports = { 
    Calculadora,
    CalculadoraAvanzada,
    EjemploScope
};

// Ejemplo de exportación y herencia:
// En el mismo archivo, las clases pueden extenderse sin exportar

// class Padre {
//     // ...
// }
// 
// class Hijo extends Padre {  // Funciona sin exportar
//     // ...
// }

// En diferentes archivos/módulos, se requiere exportar para poder importar y extender

// archivo1.js
// class Padre {
//     // ...
// }
// module.exports = { Padre };  // Se exporta para que otro archivo pueda usarla
// 
// archivo2.js
// const { Padre } = require('./archivo1.js');
// class Hijo extends Padre {  // Funciona después de importar
//     // ...
// }
