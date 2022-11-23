// Propagación de 2 arrays
let frutasA = ["Banana", "Manzana", "Pera"];
let frutasB = ["Durazno", "Ciruela", "Naranja"];

let todasLasFrutas = [...frutasA, ...frutasB];
console.log(todasLasFrutas);

// Propagación dentro de un objeto literal 
let cursada = {
    curso: "FullStack",
    turno: "Mañana",
    sede: "San Miguel"
};

let alumnoA = {
    nombre: "Milo",
    edad: 18,
    ...cursada
};

let alumnoB = {
    nombre: "Crispín",
    edad: 16,
    ...cursada
};

let alumnoC = {
    nombre: "Abi",
    edad: 28,
    ...cursada
};

let alumnos = [
    alumnoA,
    alumnoB,
    alumnoC
];


console.log(alumnos);

// Propagación en una función
function asistencia(...dias) {
    for (let d = 0; d < d.length; d++) {
        console.log("El alumno asistió "+dias[d]+" veces");
    }    
};

console.log(asistencia(5));