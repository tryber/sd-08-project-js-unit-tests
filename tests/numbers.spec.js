/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

const parament = [1, 2, 3, 4, 5];
const unexpected = [1, 2, '3', 4, 5];
const expectedResult = true;
const unexpectedResult = false;
const output = numbers(parament);

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
    assert.strictEqual(numbers(parament), expectedResult); // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    assert.strictEqual(numbers(unexpected), unexpectedResult); // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    assert.strictEqual(numbers([1, 'a', 3]), unexpectedResult); // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    assert.strictEqual(numbers([' ']), unexpectedResult); // Escreva um teste em que a função recebe [' '] e retorna false
  });
});
