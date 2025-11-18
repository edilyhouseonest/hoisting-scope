const { restar } = require('./scopeModularMain.js');
// console.log(restar()); // Funciona

// trayendo  valor del modulo o del archivo, scopeModlarMain.js 

const resta = require('./scopeModularMain.js');
       valorImportadoRequerido = resta.restar();  // invocando la función
    
console.log("Valor de la Resta IMPORTADA DESDE OTRO MODULO: " + valorImportadoRequerido);


