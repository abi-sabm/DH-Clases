// Métodos de arrays y strings

let arrayElectro = ["microondas", "televisor", "aspiradora", "cafetera", "juguera", "heladera"];

// Acceder de manera aleatoria
function electroAleatorio(max){ 
    return Math.floor(Math.random() * max) 
} 
console.log("1. Electrodoméstico aleatorio", electroAleatorio(1),);


// Extraer el primer elemento - Agregarlo al final
let sacar = arrayElectro.shift();
arrayElectro.push(sacar);
console.log("2. Extraer y colocar", arrayElectro);


// Agregar 2 elementos al final
arrayElectro.push("aire acondicionado", "playStation");
console.log("3. Agregar 2 al final", arrayElectro);


// Cantidad de productos
console.log("4. Cantidad de productos", arrayElectro.length);


// Buscar un producto
function buscarElectro(arrayElectro, electro){
    if(arrayElectro.includes(electro)){
        return "Producto encontrado";
    }
    return "Producto no encontrado";
}
console.log("5. Buscar producto:", buscarElectro(arrayElectro, "televisor"));


// Unificar como string
let arrayUnido = arrayElectro.join(" ");
console.log("6. Pasar a string:", arrayUnido);

// Determinar cantidad de elementos
console.log("7. Cantidad de elementos:", arrayUnido.length);

// Cambiar el nombre de un producto
console.log("8. Reemplazar:", arrayUnido.replace("aspiradora", "celular")); 

// Nueva cadena de texto
console.log("9. Transformar en array", arrayUnido.split(" "));

