// Con el objeto global require podemos extraer el valor que sacamos de .exports.

// Acá vamos a usar lo que se conoce como ruta relativa.

// const constantGroup = require('./module/myModule')

// console.log(constantGroup)

// Abriendo llaves en la constante puedo llamar a una propiedad específica del objeto-Array.

const { myArray, myNumber } = require("./module/myModule");

console.log(myArray);
console.log(myNumber);
