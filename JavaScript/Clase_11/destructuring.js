// Destructuración de arrays
let cursos = ["Programación", "MKT", "Linux", "UX", "Data Science"];
console.log(cursos);

let  [ programacion, mkt, linux ] = cursos;
console.log(programacion);
console.log(linux);

// Destructuración de objetos literales
let persona = {
    nombre: "Abi",
    edad: 28,
    profesion: "Estudiante",
    seriesFavoritas: ["The Office", "Better Call Saul", "Game of Thrones"]
}
console.log(persona);

let { nombre, profesion } = persona;
console.log(nombre);
console.log(profesion);
