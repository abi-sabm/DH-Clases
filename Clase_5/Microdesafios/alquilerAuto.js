// Alquiler de un Vehiculo resuelto
function alquiler(tipoVehiculo, cantDias, sillaBebe){
    
    let total = 0;

    switch (tipoVehiculo){
        case "Compacto":
            total = 14000 * cantDias;
            break;
        case "Mediano":
            total = 17000 * cantDias;
            break;
        case "Camioneta":
            total = 28000 * cantDias;
            break;
    }

    if(sillaBebe){
        total = total + (1200 * cantDias);
        return "Estimado cliente: con base en el tipo de vehículo "+tipoVehiculo+" alquilado, considerando los "+cantDias+" días utilizados y la silla para bebé, el monto a pagar es de $"+total;
    }

    return "Estimado cliente: con base en el tipo de vehículo "+tipoVehiculo+" alquilado, considerando los "+cantDias+" días utilizados, el monto a pagar es de $"+total;

}

console.log(alquiler("Compacto", 8, false));
console.log(alquiler("Mediano", 10, true));
console.log(alquiler("Camioneta", 6, true));


console.log("-------------------------------------------------------------------------------------------------------");

// Alquiler de un Vehículo Abi
// function alquilerVehiculo(vehiculo, dias, silla){
    
//     let total = 0;

//         if(vehiculo == "Compacto"){
//             return 14000 * dias;
//         } else if(vehiculo == "Mediano"){
//             return 17000 * dias;
//         } else(vehiculo == "Camioneta")
//             return 28000 * dias;

//     switch(silla){
//         case true:
//             total = total + (1200 * dias);
//         "Estimado cliente: con base en el tipo de vehículo "+vehiculo+" alquilado, considerando los "+dias+" días utilizados y la silla para bebé, el monto a pagar es de $"+total;
//         break;
//         case false: 
//         "Estimado cliente: con base en el tipo de vehículo "+vehiculo+" alquilado, considerando los "+dias+" días utilizados, el monto a pagar es de $"+total;
//         break;
//     }
// }

// console.log(alquilerVehiculo("Compacto", 8, false));
// console.log(alquilerVehiculo("Mediano", 10, true));
// console.log(alquilerVehiculo("Camioneta", 6, true));