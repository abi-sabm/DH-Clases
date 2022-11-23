// Ejercicio 1
function tablaDeMultiplicar(numero) {
    let i = 1;
    let resultado = 0;
    while(i <= 10){
        resultado = i * numero;
        console.log(numero + " * " + i + " = " + resultado);
        i++;
    };
};
tablaDeMultiplicar(2);


// Sumatoria: unPeriodo es un array que tiene una cantidad de datos que no conocemos.
// unPeriodo.length va a cortar el ciclo cuando alcancemos el total de elementos que tiene una array
// Dentro del bloque del ciclo for la variable "mes" adquiere el valor de unPeriodo[i]
// ésto lo hacemos ya que en la primera iteración del ciclo la variable i vale 0 (primera posición del array)
// en la segunda iteración del ciclo la variable i vale 1 (segunda posición del array) (...)

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    };
    return sumatoria; // Retorna la suma de TODOS los meses 
};

// Conteos meses con ganancia
function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
      if(unPeriodo[i] > 0){
        cantidad ++
      };
    };
    return cantidad; // Retorna la cantidad de meses que fueron > 0
};

// Filtrados saldos positivos
function saldosDeMesesConGanancia(unPeriodo) {
  let saldos = [];
  for (let i = 0; i < unPeriodo.length;i++) {
    if(unPeriodo[i] > 0){
      saldos.push(unPeriodo[i])
    };
  };
  return saldos; // Retorna en un array SOLO los meses > 0 (ganancia)
};

// Conteo de meses con perdidas
function cantidadDeMesesConPerdida(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if(unPeriodo[i] < 0){
      cantidad ++
    };
  };
  return cantidad; // Retorna la cantidad de meses con saldos < 0
};