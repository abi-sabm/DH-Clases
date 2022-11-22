// ejercicio 1 -> solo sumar los indices <= 1000 del array dado en (importes)
function sumatoriaBajoImporte(importes){
    let sumaDeImportes = 0
    for(let i = 0; i < importes.length; i++){

        if(importes[i] > 0 && importes[i] <= 1000){

            sumaDeImportes +=  importes[i]

        }
    }
    return sumaDeImportes
}


// ejercicio 2 -> del array ALibres, se compara el valor de ADeseado
// el ciclo for recorre el array aLibres.length, si esta el AD devuleve un msj true
function asientosDisponibles(asientosLibres, asientoDeseado){
    for(let i = 0; i < asientosLibres.length; i++){
        if(asientoDeseado == asientosLibres[i]){
            let envio =  "Felicitaciones, el asiento número " + asientoDeseado +  " está disponible"
            return envio
        }
    }
    let envio =  "Lo sentimos, el asiento número "+ asientoDeseado + " está ocupado, pero aún quedan " + asientosLibres.length + " asientos disponibles"
    return envio
}

// ejercicio 3 -> un array que muestre los pasajeros que suben y bajan
function reporteDePasajeros(estaciones) {
    let resultado = []; //variable que contiene el array
    for (let i = 0; i <= estaciones; i++) {
        let pasajeros;
        if (i <= 4) {
            pasajeros = 200 + i*20;
        } else {
            pasajeros = 200 + i*20 + 20;
        }
        resultado.push("En la estación "+i+" hay "+pasajeros+" pasajeros arriba del tren");
    }
    return resultado;
}

function reporteDePasajeros(estacion){
    let resultado = [];
    for(let i = 0; i <= estacion; i++){
        if(i < 5){
            let pasajeros = 200 + i + 50 - 20;

        } else {
            (i === 5)
            pasajeros = 200 + i + 120 - 80;
        }
        resultado.push("En la estación "+i+" hay "+pasajeros+" pasajeros arriba del tren");
    }
    return resultado
} 

function laClaveSecreta(clave){
    let claveDescifrada = "";

    for (let i = clave.length -1; i >= 0; i--){
        if (clave === "*"){
            clave.pop();
        } else {
          claveDescifrada += clave[i];
        }
    }
    return claveDescifrada;
}


function laClaveSecreta(letras){
    let clave = "";
    letras.reverse();

    for(let i = 0; i < letras.length; i ++){
    if (letras[i] != "*") {
        clave += letras[i];
        };
    };
    return clave;
};
