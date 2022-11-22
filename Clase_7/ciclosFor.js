// for aumenta en 1 a i si es menor a 10
for(let i = 0; i<10; i++){
    console.log("El valor de i es igual a: " + i);
};

// for aumenta en 1 a i si es mayor a 10 -  no pasa nada
for(let i = 0; i>10; i++){
    console.log("El valor de i es igual a: " + i);
};

// for decrece a i en 1 (bucle infinito)
//for(let i = 0; i<10; i--){
//    console.log("El valor de i es igual a: " + i);
//};


// ejercicio 1 
function imprimirAzul4(){
    for ( let imprimirAzul4 = 0 ; imprimirAzul4 < 4; imprimirAzul4 ++ ){ 
    console.log ("Azul");
    };
};

function imprimirAzul4(){
    for ( let i = 0 ; i < 4; i++ ){ 
    console.log ("Azul");
    };
};

// ejercicio 2
function pasandoPorI(){
    for ( let i = 0 ; i < 5; i++ ){ 
    console.log ("acá i tiene el valor de "+i);
    };
};

// ejercicio 3
function noParesDeContarImparesHasta(n){
    let contador = 0;
      for (let i = 0 ; i <= n; i++){ 
        if(i % 2 != 0){
          contador += 1
        };
    };
return contador;  
};