/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/
const assert = require('assert');

const numbers = (myArray) => {
  for (let i = 0; i < myArray.length; i += 1) {
    if (typeof myArray[i] !== 'number') {
      return false;
    }
  }
  return true;
};
assert.deepStrictEqual(numbers([1, 2, 3, 4, 5]), true);
assert.deepStrictEqual(numbers([1, 2, '3', 4, 5]), false);
assert.deepStrictEqual(numbers([1, 'a', 3]), false);
assert.deepStrictEqual(numbers([' ']), false);
module.exports = numbers;
