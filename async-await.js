const {readFile} = require('fs')

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

// getText('./data/fourth.txt')
//     .then(result => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

    const read  = async () => {
    const result = await getText('./data/first.txt')
    const result2 = await getText('./data/second.txt')
    const result3 = await getText('./data/third.txt')
    const result4 = await getText('./data/fourth.txt')
    console.log(result, result2, result3, result4)
}

read()