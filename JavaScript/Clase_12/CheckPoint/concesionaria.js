// Etapa 2 -> bien 

const autosImportados = require("./autos.js")

/* const concesionaria = {
  
   autos: autosImportados
};
*/

// Etapa 3 -> bien

const concesionaria = {
  
   autos: autosImportados,
   buscarAuto: function(patente){
      const autoADevolver = this.autos.find(autos => {
          return autos.patente === patente;
      });
      if (autoADevolver){
          return autoADevolver;
      }
      return null;
  },


// Etapa 4 -> bien

   venderAuto: function(patente){
      const autoBuscado = this.buscarAuto(patente);
      if (autoBuscado){
         autoBuscado.vendido = true;
         return autoBuscado.vendido
      };
   },

// Etapa 5 -> bien

   autosParaLaVenta: function(){
      const autoAVender = this.autos.filter(
         function (auto) {
            return auto.vendido == false;
         }
      )
      return autoAVender
   },

// Etapa 6 -> bien

   autosNuevos: function (){
      const autosNuevosParaVender = this.autosParaLaVenta()
      const autos0km = autosNuevosParaVender.filter(
         function (auto) {
            return auto.km <= 100;
         }
      )
      return autos0km;
   },

// Etapa 7 -> 
   listaDeVentas: function () {
      const autosVendidos = this.autos.filter(
         function (auto){
           return auto.vendido == true;  
         }
      )
      const ventaTotal = autosVendidos.map(
         function (auto){
            auto = auto.precio
            return auto;
         }
      )
      return ventaTotal;
   },

// Etapa 8
   totalDeVentas: function (){
      const todasLasVentas = this.listaDeVentas().reduce(
         function (acum, num){
            return acum + num; 
         }, 0
      )
      return todasLasVentas
   },

// Etapa 9
};