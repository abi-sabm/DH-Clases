// Metodos de los arrays

let notas = [3, 5, 10, 9, 7, 8, 8, 8];

// .push
notas.push(1, 2);
notas.push(4);

// .pop -> quita el ultimo numero -> 4
let elUltimo = notas.pop();

// .shift -> quita los 2 primeros numero -> 3, 5
notas.shift();
notas.shift();

// .unshift -> agrega al principio -> 1
notas.unshift(1);

console.log(notas);
console.log(elUltimo);

// .indexOf -> busca desde el inicio, retorna el indice -> el 1er 8 esta en el indice 4
let posicionDelOcho = notas.indexOf(8);
console.log(posicionDelOcho);

// .lastIndexOf -> busca desde el final, retorna el indice -> el 1er 1 esta en el indice 7
let posicionDelUno = notas.lastIndexOf(1);
console.log(posicionDelUno);

// .includes -> busca el elemento, retorna un booleano -> true - false
let existeElNum = notas.includes(15);
console.log(existeElNum);

// if ternario para determinar si el indice existe o no, siempre que sea distinto de -1
let posicionDelNum = notas.indexOf(2);
posicionDelNum != -1 ? console.log('Aca esta!') : console.log('Aca no esta!');

// .join -> convierte en cadena de texto al array y lo separa segun se indique
let convertidoString = notas.join(', ');
console.log(convertidoString);

