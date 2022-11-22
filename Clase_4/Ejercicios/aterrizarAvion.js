// Aterrizar Avion - if ternario
let velocidad = 270;
let altura = 150;

let puedeAterrizar = velocidad >= 268 && velocidad <= 278 && altura >= 150 && altura <= 300 ? true : false;

puedeAterrizar == true ? console.log("Puede aterrizar") : console.log("No puede aterrizar");