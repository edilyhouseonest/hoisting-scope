
// El valor y funcionamiento de la funcion restar podrá ser utilizada al realizar la exportación del modulo
// Entonces podrá ser utilizado en cualquier otro archivo siempre que sea requerido - require  o importada con import

function restar(){
    let a = 58;
    let b = 20;
    let resultado = a - b;  // variable o valor a ser retornado, y asignado a una nueva variable
    return resultado;
}

// Si esta función no es exportada,  el scope o el alcance será unicamente en este archivo
function multiplicar(){
    let a = 58;
    let b = 20;
    let resultado = a - b;  // variable o valor a ser retornado, y asignado a una nueva variable
    return resultado;
}

console.log("Resultado de la multiplicación: " + multiplicar() );



module.exports = { restar };

