// Con las llaves puedo requerir el elemento que yo quiera de file system (fs) y no requerirlo en su totalidad.

const {readFile} = require('fs')

// El new Promise va a hacer que se ejecute un código después de cierto tiempo.

// DATAZO: Colocar 'return' antes del new Promise().
const getText = (pathFile) => {
   return new Promise((resolve, reject) => {

        readFile(pathFile, 'utf-8', (err, data) => {
         if (err) {
            reject(err)
         }
            resolve(data)
        })
    })
}

// DATAZO: En arrow function si hay una sola línea de código, puedo quitar llaves del bloque de código y los paréntesis de los parámetros de la función.
// El catch atrapa cualquier problema que hay con los then.
getText('./data/fourth.txt')
    .then(result => console.log(result))
// En este .then hay que usar getText dentro de un arrow function porque no es un parámetro, sino tira undefined.
    .then(() => getText('./data/first.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
