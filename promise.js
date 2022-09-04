// Con las llaves puedo requerir el elemento que yo quiera de file system (fs) y no requerirlo en su totalidad.

const {readFile} = require('fs')

new Promise()

readFile('./data/first.txt', 'utf-8', (err, data) => {
 if (err) {
    return console.log(err)
 }
    console.log(data)
})