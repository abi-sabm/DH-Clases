// Funcion expresada -> funcion que esta declarada dentro de una variable 
let suma = function (num1, num2){
  return num1 + num2;
}
// para invocar la funcion se deben pasar los parametros dentro de la variable suma()
console.log(suma(5,3));


// Funcion declarada -> funcion de ambito global

function restar(numA, numB){
  return numA - numB;
}

console.log(restar(20, 4));

// Tipos de Scope
let mensaje = "Hola" //-> variable de scope global

function saludar(){
  let mensaje = "Chau"; //-> variable de scope local
  return mensaje;
}

console.log(mensaje); //-> reproduce el scope global
console.log(saludar()); //-> reproduce el scope local

// ejercicio 1 - switch
let dia = " "
function finDeSemana(dia){
  switch (dia){
    case "viernes":
    console.log("buen finde");
    break;

    case "lunes":
    console.log("buena semana");
    break;

    default:
    console.log("buen dia");
  }
}
finDeSemana("sabado");


// ejercicio 2 - switch
let diA = " ";
function tengoClases(diA){
  switch(diA){
    case "lunes":
      console.log("Tenes clases");
      break;
    case "miercoles":
      console.log("Tenes clases");
      break;
    case "viernes":
      console.log("Tenes clases");
      break;
    default:
      console.log("No tenes clases");
  }
}
tengoClases("miercoles");
