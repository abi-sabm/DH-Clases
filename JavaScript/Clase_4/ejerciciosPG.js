let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let marcaRodadoMasGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB;
console.log("La bicicleta con rodado más grande es la " + marcaRodadoMasGrande.marca);


let finDeSemana = "dia";
  switch (finDeSemana){
    case "viernes":
    console.log("buen finde");
    break;

    case "lunes":
    console.log("buena semana");
    break;

    default:
    console.log("buen dia");
  }

