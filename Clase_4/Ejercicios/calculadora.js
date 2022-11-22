// Mi primer calculadora - switch

let calculadora = "dividir";
let num1 = 4;
let num2 = 1;
let sumar = (num1 + num2);
let restar = (num1 - num2);
let multiplicar = (num1 * num2);
let dividir = (num1 / num2);

switch (calculadora) {
    case "sumar":
        console.log("El resultado de sumar " + num1 + " + " + num2 +" es "+ sumar);
        break;
    
    case "restar":
        console.log("El resultado de restar " + num1 + " - " + num2 +" es "+ restar);
        break;

    case "multiplicar":
        console.log("El resultado de multiplicar " + num1 + " * " + num2 +" es "+ multiplicar);
        break;

    case "dividir":
        console.log("El resultado de dividir " + num1 + " / " + num2 +" es "+ dividir);
        break;

    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
        break;
}
