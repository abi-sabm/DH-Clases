// Estructura para almacenar un conjunto de películas

let arrayPeliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

// Función para convertir a mayúsculas
function convertir(pelicula) {
    return pelicula.toUpperCase();
}
console.log(convertir("Thor: amor y trueno"));

// Cadena de texto con películas nuevas
let nuevasPeliculas = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

// Excluir la primer película
let extraer = nuevasPeliculas.pop();

// Unir ambos arrays
function arraysUnidos(array1, array2) {
    return array1.concat(array2);
}
console.log(arraysUnidos(arrayPeliculas, nuevasPeliculas));