// const { readFile } = require("fs");
// const { promisify } = require("util");

// DATAZO: Si tira buffers, hay que utilizar la codificación UTF-8.

// const readFilePromise = promisify(readFile);

// const read = async () => {
//   try {
//     const result = await readFilePromise("./data/first.txt", 'utf-8');
//     const result2 = await readFilePromise("./data/second.txt", 'utf-8');
//     const result3 = await readFilePromise("./data/third.txt", 'utf-8');
//     const result4 = await readFilePromise("./data/fourth.txt", 'utf-8');
//     console.log(result, result2, result3, result4);
//   } catch (error) {
//     console.log(error);
//   }
// };

// read();

// ----- CÓDIGO OPTIMIZADO CON FS/PROMISE -----

const { readFile } = require("fs/promises");

// DATAZO: Si tira buffers, hay que utilizar la codificación UTF-8.

const read = async () => {
  try {
    const result = await readFile("./data/first.txt", "utf-8");
    const result2 = await readFile("./data/second.txt", "utf-8");
    const result3 = await readFile("./data/third.txt", "utf-8");
    const result4 = await readFile("./data/fourth.txt", "utf-8");
    console.log(result, result2, result3, result4);
  } catch (error) {
    console.log(error);
  }
};

read();
