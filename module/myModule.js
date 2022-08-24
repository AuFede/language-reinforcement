// const myWebAddress = "Augustoweb.com"

// console.log(module)

// Acá estamos usando .exports para almacenar las constantes.


const myWebAddress = "Augustoweb.com"
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: 'Ryan',
    lastname: 'Ray'
}

// Creamos un nuevo objeto para agrupar las constantes.

// const group = {
//     user: user
//     myNumber: myNumber,
//     myArray: myArray,
//     myWebAddress: myWebAddress,
// }
// module.exports = group

// Otra opción puede ser:

module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.myWebAddress = myWebAddress
