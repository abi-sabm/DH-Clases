// Ajuste tarifario KWH - if ternario

let pagoMes = 3500;
let consumoKWH = 540;
let porcentaje = 20;
let aumento = (pagoMes * porcentaje / 100);

let ajusteKWH = consumoKWH > 300 ? aumento + pagoMes: pagoMes;

console.log("Informamos que los hogares con consumo mayor a 300kwh por mes tendrán un Ajuste Tarifario con un aumento del "+ porcentaje+"%.");

console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + "KWH,");
console.log("cumplimos con informarle que se ha ajustado el total a pagar, siendo el mismo de $" + ajusteKWH);

//console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + "KWH, no sufrirá del Ajuste Tarifario. El saldo a abonar es de $ " + sinAjuste)

let sinAjuste = consumoKWH < 300 ? aumento : pagoMes

