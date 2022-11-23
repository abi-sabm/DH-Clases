// Arrays
let nombres = ['Nacho', 'Dario', 'Javier'];
let edades = [34, 28, 37, 40, 43];
let valoresDeVerdad = [true, false, false];
let variados = ['Nacho', 34, true, false, edades];

// Un dato concreto dentro de un array
console.log(edades); // -> [34, 28, 37, 40, 43] -> todo el array
console.log(valoresDeVerdad[0]); // -> true -> el elemento en indice 0

// Arrays dentro de arrays
console.log(variados[4]); // -> devuelve el array edades -> el elemento del indice 4
console.log(variados[4][1]); // -> devuelve 28 -> el elemento del indice 1 del array edades