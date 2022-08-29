// El módulo fs(file system) puede funcionar también de forma asíncrona.

// const fs = require('fs')



// fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
//     if(error) {
//         console.log(error)
//     }
//     console.log(data)

//     fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
//         if(error) {
//             console.log(error)
//         }
//         console.log(data)

    
//         fs.writeFile('./data/newfile.txt', 'archivo creado desde fs2', (err, data) => {
//         console.log(err)
//         console.log(data)

//         })
//     })
// })
