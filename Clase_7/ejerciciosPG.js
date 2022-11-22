function reporteDePasajeros(cantidadEstaciones) {

    let cantPasajeros = 200
    let pasajerosPorEstacion = ["En la estación 0 hay 200 pasajeros arriba del tren"]

    for (let i = 1; i <= cantidadEstaciones; i++) {
        if (i == 5) {
            cantPasajeros = cantPasajeros + 40
        } else {
            cantPasajeros = cantPasajeros + 20
        }
        pasajerosPorEstacion.push("En la estación " + i + " hay " + cantPasajeros+ " pasajeros arriba del tren")
    }

    return pasajerosPorEstacion
}


function tablaDeMultiplicar(numero) {
    let i = 1
   while(i <= 10){
       console.log(numero + " * " + i + " = " + (numero * i))
       i++
   }
}
