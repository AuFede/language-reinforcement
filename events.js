// NodeJS nos provee un módulo para crear nuestros propios eventos.

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log('received')
    console.log(data)
    console.log(secondData)
})

// Cada customEmitter funciona como un click. El orden es importante, primero debe ir el evento response, antes de los emit.

customEmitter.emit('response', 'Hello World', 568)
customEmitter.emit('response', 'Augusto')
customEmitter.emit('response', 30)
customEmitter.emit('response', [1,2,3])
customEmitter.emit('response', {name:"Ryan"})