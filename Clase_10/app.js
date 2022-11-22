const bicicletas = require('./datosBici.js');

const dhBici = {

    bicicletas: bicicletas,

    buscarBici: function(idABuscar){
        const bicicletaADevolver = this.bicicletas.find(bicicleta => {
            return bicicleta.id === idABuscar;
        });
        if (bicicletaADevolver){
            return bicicletaADevolver;
        }
        return null;
    },

    venderBici: function(idABuscar){
        const biciBuscada = this.buscarBici(idABuscar);
        if (biciBuscada){
            biciBuscada.vendida = true;
        return biciBuscada;
        }
        return("Bicicleta no encontrada");
    },

    totalDeVentas:  function(){
        const bicicletasVendidas = this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida == true;
        });

        const ventaTotal = bicicletasVendidas.reduce(function(total, actual){
            return total + actual.precio
        }, 0);
        return ventaTotal;
    },
}

console.log(dhBici.venderBici(3));