// Función que rertona las tablas de multiplicar de 1 al 10
// Mediante el ciclo for - while - do while

function tablasUnoAlDiez() {
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log("i: " + i, "j: " + j, "|| i * j: "+ i * j);
        };
        
    }
}
console.log(tablasUnoAlDiez());