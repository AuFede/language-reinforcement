const fs = require('fs')

// readFileSync sirve para leer un archivo. El formato que ofrece es crudo, en este caso buffer. Para convertirlo por ejemplo en string, se puede usar la propiedad utf-8. También se puede usar la propiedad toString().

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first, second.toString())

// writeFileSync sirve para colocar un archivo nuevo.

const title = 'este es un fourth archivo. Almacenado en una const'

fs.writeFileSync('./data/third.txt', 'este es un third archivo que se introduce en la carpeta data')

fs.writeFileSync('./data/fourth.txt', title)

// Con flag y la propiedad append, es decir a, podemos ir agregando algo nuevo y que el archivo no se reescriba.

const adding = 'Sumando algo nuevo.'

fs.writeFileSync('./data/adding.txt', adding, {
    flag: 'a'
})