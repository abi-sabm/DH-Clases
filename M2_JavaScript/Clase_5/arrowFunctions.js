// Arrow de 1 parametro, sin ()

let laMitad = numero => numero / 2;
console.log(laMitad(28));

// Arrow de 2 parametros

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4));

// Arrow condicional

let tengoQueTrabajar = dia => {
    if(dia == "sabado" || dia == "domingo"){
        return "No tenes que trabajar";
    }else{
    return "Si, tenes que trabajar";
    }
}
console.log(tengoQueTrabajar("lunes"));