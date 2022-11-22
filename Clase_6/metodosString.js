// Metodos de los Strings

// .length -> longitud en índices
let mensaje = "Gran día para practicar JavaScript!";
console.log(mensaje.length); // hay 35 índices

// .indexOf -> buscar - saber si existe 
console.log(mensaje.indexOf("día")); // existe en el índice 5

// .slice -> tomar una porción de texto
console.log(mensaje.slice(0, 24)); // desde x, hasta y
console.log(mensaje.slice(-11)); // desde atras hacia adelante

// .trim -> eliminar espacios en blanco 
let nombreCompleto = "   Homero J. Simpson   ";
console.log(nombreCompleto.trim());

// .split -> transformar a array
console.log(mensaje.split(" ")); // usa el espacio para determinar cada índice

// .replace -> cambiar una porción del texto
console.log(nombreCompleto.replace("Simpson", "Thompson"));
// en donde encuentra el primer parámetro lo reemplaza por el segundo

// LOS METODOS NO MODIFICAN LA VARIABLE PRINCIPAL


// ejercicio .replace
function reemplazoFastFast (texto, buscar, reemplazar){
    return texto.replace(buscar,reemplazar)
}
console.log(reemplazoFastFast("I'm taking a ride whit my best friend", "whit", "with"));

// ejercicio .indexOf
function menciona(texto, palabra){
    return texto.indexOf(palabra)
}
console.log(menciona("'Cause it's not good", "good"));

function mencionaIf(texto, palabra){
    if(texto.indexOf(palabra) != -1){
        return true;
    }
    return false;
}
console.log(mencionaIf("I'm was born in the wrong place", "wrong"));

// ejercicio .slice
let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11);

console.log(licenciada);