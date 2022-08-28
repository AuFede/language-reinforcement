const fs = require('fs')

// readFileSync sirve para leer un archivo. El formato que ofrece es crudo, en este caso buffer. Para convertirlo por ejemplo en string, se puede usar la propiedad utf-8. También se puede usar la propiedad toString().

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first, second.toString())