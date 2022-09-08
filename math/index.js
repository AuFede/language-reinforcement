// También puedo exportar sólo las funciones.

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

// Sintaxis más apropiada.
// export default {
//     add,
//     subtract,
//     multiply,
//     divide
// }

// Sintaxis common JS.
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }
