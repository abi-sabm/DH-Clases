const figuras = require('./collectibles.js');

const figuras1 = {
    figuras : figuras,
    buscarMarca: function(marca){
        const marcaADevolver = this.figuras.find(figuras => {
            return marca.id === idABuscar;
        });
        if (bicicletaADevolver){
            return bicicletaADevolver;
        }
        return null;
    },


}

console.log(figuras1);
