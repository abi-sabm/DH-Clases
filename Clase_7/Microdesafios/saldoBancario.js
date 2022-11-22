// Array con operaciones bancarias realizadas

let operacionesBancariasCliente1 = [30000, -5000, 6000, -20000, 8000. -900, -500, 5000];

let operacionesBancariasCliente2 = [15000, -2000, 9000, -200, 10000. -6500, 300, -1000];



// Acumuladores
let depositos = 0;
let retiros = 0;
let saldo = 0;

// Función callback
function cuentaBanco(valores) {
    for (let i = 0; i < valores.length; i++) {
        if(valores[i] < 0) {
            retiros += valores[i];
        } else {
            depositos += valores[i];
        }
        saldo += valores[i];
    }

// se devuekve en un array los resultados del ciclo for
    return [
        retiros,
        depositos,
        saldo
    ];
}

// Función que recibe el nombre y apellido, su saldo de deposito, retiro y saldo actual
// Almacenar los datos del callback en una variable: resultados

function cliente(nombre, apellido, operaciones, callback) {
    const resultados = callback(operaciones);

    return [nombre + ' ' + apellido, resultados[0], resultados[1], resultados[2]];
    // retornamos un array 
    // resultados[0] -> para acceder al indice correspondiente del callback: retorna "retiros"
    // resultados[1] -> retorna depositos
    // resultados[2] -> retorna saldo
}

// Variable que almacena el resultado de las 2 funciones
// cuentaBanco sin () porque lo que se pasa en la variable estadoCliente es la referencia del callback, no se ejecuta

let estadoCliente1 = cliente('Pepito', 'Perez', operacionesBancariasCliente1, cuentaBanco);

let estadoCliente2 = cliente('Ana', 'Alvarez', operacionesBancariasCliente2, cuentaBanco);



// en estadoCliente se llama al primer índice del array del return de la función cliente -> nombre y apellido está en [0]
console.log('Estimado ' + estadoCliente1[0]); 

// el total de depositos está en la posición [2] del array del return de la función cliente
console.log('El monto total de los depósitos es de: $' + estadoCliente1[2]);

// el total de retiros está en la posición [1] del array del return de la función cliente
console.log('El monto total de los retiros es de: $' + estadoCliente1[1]);

console.log('Por lo tanto, su saldo actual en la cuenta es de: $' + estadoCliente1[3]);


console.log('--------------------------------------------------------------------------');


console.log('Estimado ' + estadoCliente2[0]);
console.log('El monto total de los depósitos es de: $' + estadoCliente2[2]);
console.log('El monto total de los retiros es de: $' + estadoCliente2[1]);
console.log('Por lo tanto, su saldo actual en la cuenta es de: $' + estadoCliente2[3]);