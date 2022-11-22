// Objetos Literales
let cursoA = {
    cantidadDeAlumnos : 25,
    docentes : ['Abi', 'Lucas'],
    horario : 'De 21 a 23 hs.'
}
console.log(cursoA);
console.log('Los docentes del curso son ' + cursoA.docentes);

// Metodos: funciones que se asignan como valor a una clave
let curso = {
    cantidadDeAlumnos : 32,
    docentes : ['Nacho', 'Javier'],
    horario : 'De 19 a 21 hs.',
    notificaciones : function (){
        return 'El horario de la cursada es ' + this.horario;
        //palabra reservada this: accede al objeto que invoca la funcion
    }   //la funcion llama al valor de la propiedad horario
}
console.log(curso.notificaciones()); // con el objeto.propiedad se accede a determinada propiedad

// Funcion constructora de Objetos: primera letra mayus

function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}

// Instanciar: crear un objeto particular a partir de su funcion modelo
// palabra reservadad new

let cursoDeProgramacion = new Curso(50, ["Javier", "Gerardo"], "de 18 a 20 hs.");
let cursoDeMarketing = new Curso(20, ["Diego", "Belén"], "de 17 a 19 hs.");

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);