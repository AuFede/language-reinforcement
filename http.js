// Bajo el protocolo http, la request es una petición al servidor y la response es la respuesta del servidor al browser. Con createServer() también creamos una función que escucha.

const http = require('http')

http.createServer((request, response) => {
    response.write('hello world!')
    response.end()
}).listen(3000)

console.log('servidor escuchando en el puerto 3000')