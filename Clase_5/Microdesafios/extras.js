// Función con .toUpperCase
function pasarA(minuscula) {
    return "Pasamos esto a mayuscula: "+minuscula.toUpperCase();
}
console.log(pasarA("hola"));

// Función con typeof
function tipoDato(dato) {
    return "El tipo de dato es: un "+typeof(dato);
}
console.log(tipoDato("Milo"))

// Función que calcule la edad de un perro en años humanos
function mascota(edad) {
    let calculador = edad * 7;
    return "La edad el perro es de "+calculador+" en años humanos."
}
console.log(mascota(2));

// Función que calcule el valor de una hora de trabajo
function salario(salarioMensual, cantDias, horasXDia) {
    let hora = (salarioMensual / cantDias / horasXDia);
    return "El valor de una hora de trabajo es de: $" + hora
}
console.log(salario(35000, 24, 8));