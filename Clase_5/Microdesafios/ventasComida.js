// totalAPagar definida con arrow function
let totalAPagar = (tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    
    let total = 0;

    switch (tipo) {
        case "Carne a la parrilla":
            total += 1800
            break;
        case "Pollo":
            total += 1500
            break;
        case "Vegetariana":
            total += 1200
            break;
    }

    if(jamon){
        total += 30;
    }
    if(queso){
        total += 25;
    }
    if(salsa){
        total += 5;
    }
    if(mayonesa){
        total += 5;
    }
    if(mostaza){
        total += 5;
    }
    if(tomate){
        total += 15;
    }
    if(lechuga){
        total += 10;
    }
    if(cebolla){
        total += 10;
    }

    return total;

}

// Función respuesta con un callback
function respuesta(nombre, apellido, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, callback){
    return "Estimad@ "+nombre+" "+apellido+" el monto total a pagar es de: $"+ callback(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);
}

// Ejecución de la función respuesta 

console.log(respuesta("Abi", "Barroso", "Pollo", true, true, false, true, false, true, false, true, totalAPagar));
console.log(respuesta("Lucas", "Alvarez", "Carne a la parrilla", true, true, true, true, true, true, false, true, totalAPagar));