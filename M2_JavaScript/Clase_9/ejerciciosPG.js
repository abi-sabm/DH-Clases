let perro = {
    nombre : "Firulais",
    edad : 2,
    vacunado : true
}

// Entrenar al deportista
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantHoras){
        this.energia -= cantHoras * 5;
        this.experiencia += cantHoras * 2;

    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

// Modulos 
let moduloNativo = require('http');
let moduloInstalado = require('axios');
let moduloPropio = require('./miFuncion')

let arrayDePeliculas = ["Harry Potter","Her", "Up", "Lego"];
module.exports = arrayDePeliculas;

