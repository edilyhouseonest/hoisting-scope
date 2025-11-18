/*
        Scope - Ámbito(Contexto): Es el contexto de ejecución actual en el que los valores y las expresiones
        son VISIBLES o se pueden referenciar. Si una variable o expresión no se encuentra en el ámbito actual, no estará disponible
        para su uso. Los ámbitos también pueden organizarse en una jerarquía, de modo que los ámbitos  hijos tienen acceso a los ámbitos padres
        pero no al revés

        JavaScript cuenta con Tres tipos de ámbitos:

        Ámbito global - Global Scope: Es el ámbito predeterminado para todo el código que se ejecuta en modo script. 
        Ámbito de módulo - Module scope El ámbito paraa el código que se ejecuta en modo módulo.
        Ambito de función - el Ambito creado con una función.

        Además los identiticadores declarados con ciertas sintaxis, como let, const y class o en modo estricto (function), pueden pertenecer a un ámbito adicional
        
        **** Scope adicionales en JavaScript **** 

        BLOCK SCOPE: Todo bloque delimmitado por { ..... } por ejemplo todo el código incluido en un if, for, while o simplemente en un par de llaves esto CREA UN ÁMBITO PROPIO.
                     Las variables declaradas con let, const o class viven solo dentro de ese bloque. Esto es distinto de var, que ignora los bloques y se eleva al scope de función o global.
        CATCH SCOPE: El parámetro del catch (error) en un try...catch también crea un scope propio para esa variable de error. Ese identificador solo existe dentro del bloque catch.

        Global Scope
        │
        ├── Module Scope
        │   │
        │   ├── Class Scope (cuerpo de class)
        │   │   │
        │   │   ├── Static Block Scope (static { ... })
        │   │   │
        │   │   └── Inicializadores y métodos (acceso a this y #privados)
        │   │
        │   └── Function Scope
        │       │
        │       ├── Block Scope (let, const, class)
        │       │
        │       └── Catch Scope (try...catch)

*/


// 1-.00. Entonces todas las variables declaradas fuera de bloques, funciones o clases serán globales 

var globalVar = "Hola soy VAR Global";
let globalLet = "Hola soy LET Global";
const globalConst = "Hola soy CONST Global";

// Estas variables estarán disponibles en todos los Ambitos incluso adentro de las funciones 
// PERO LAS VARIABLES ADENTRO DE LAS FUNCIONES SOLO SERAN ACCESIBLES DENTRO DE LA FUNCION

function pruebaUno(){
    console.log("************ Debe Imprimir prueba Uno *************")
    console.log("Desde función pruebaUno:" +  globalVar);
    console.log("Desde función pruebaUno:" + globalLet);
    console.log("Desde función pruebaUno:" + globalConst);    
    console.log("************ Debe Imprimir prueba Uno *************")
    // 2.-   Estas son locales y serán accesibles solo dentro de esta función, exceptuando  cuando sean retornadas con la palabra reservada return
    console.log("************ Variables Locales *************")
    var ambitoFuncionVar = "Soy Var Local, sin return explicito no salgo de aquí"
    let ambitoFuncionLet = "Soy Let Local, sin return explicito no salgo de aquí"
    const ambitoFuncionConst = "Soy Const Local, sin return explicito no salgo de aquí"
    console.log("*************************")
}



console.log("************ Dno se van a imprimir, estan dentro de una función y no estan retornadas *************")
//  LAS SIGUIENTES LINEAS DE CODIGO FALLARÁN SI SE DESCOMENTAN
// Estos console.log  estan comentados. ya que las variables fueron declaras fuera del Alcance y esas variables solo existen cuando se ejecuta la función 
//  aqui no existen
//  console.log(ambitoFuncionVar);
//  console.log(ambitoFuncionLet);
//  console.log(ambitoFuncionConst);

// Invocar funcion
pruebaUno();

// *******.         PARA QUE LOS VALORES DE UNA  FUNCION PUEDAN SER USADAS FUERA DE ELLA DEBEN SER RETORNADAS
// Esta funcion hace y retorna
function sumar(){
    let a = 10;
    let b = 20;
    let resultado = a + b;  // variable o valor a ser retornado, y asignado a una nueva variable
    return resultado;
}

// Esta variable puede tener cualquier nombre,  al final extrae u optiene el valor de la variable resultado de la función sumar
let suma = sumar();
console.log("*************************  Probar funcion Dos  sumar()")
console.log("resultado de la suma: extrayendo valor de la función:  " + suma);



//. SCOPE ANIDADO

// ****** Ejemplo con funciones anidadas y return ******

function exterior() {
    let a = 10;
    let b = 20;

    function interior() {
        let c = 5;
        let resultado = a + b + c; // suma usando variables de exterior e interior
        return resultado;          // se retorna para poder usarlo fuera
    }
    // esta variable esta en una funcion hija, de exterior entonces las funcioens Hijas pueden acceder a los valores de los padres
    // Pero los padres no pueden tener acceso a las fuciones hijas que no tengan retorno o return explicito
    // console.log(c);

    // exterior retorna lo que interior calcule. -- accede al resultado a través del return
    return interior();
}

// Se asigna el valor retornado a una nueva variable. -- No tendrá acceso directo a invocar la función interior() a menos que exterior la retorne explicitamente
let resultado = exterior();
console.log("*************************  Probar función exterior() *************************");
console.log("resultado de la suma anidada: " + resultado);
