// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000))
// }

// createBigFile()

const {createReadStream} = require('fs')

// // Ahora esta const es un objeto con manejadores de eventos.
const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
})

// Con on va a estar escuchando el elemento "data". La función va a escuchar porciones de datos, por eso usa el parámetro chunk(trozo).
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('ya terminé de leer el archivo')
})

stream.on('error', () => {
    console.log(error)
})




