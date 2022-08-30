// Bajo el protocolo http, la request es una petición al servidor y la response es la respuesta del servidor al browser. Con createServer() también creamos una función que escucha.

const http = require('http')

const server = http.createServer((request, response) => {

    console.log(request.url)

    if(request.url === '/') {
        response.write('welcome to the server')
        return response.end()
    }

    if(request.url === '/about') {
        response.write('acerca de')
         return response.end()
    }

    response.write(`<h1>Not Found<h1>
    <p>esta página no se encontró<p>
    <a href="/">volver a la página principal<a>`)
    response.end()
})

server.listen(3000)

console.log('servidor escuchando en el puerto 3000')