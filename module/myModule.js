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

const group = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}
module.exports = group

