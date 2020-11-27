/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(productDetails('Alcool gel', 'Máscara')));
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool get', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool get', 'Máscara')[0], 'object');
    assert.strictEqual(typeof productDetails('Alcool get', 'Máscara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool get', 'Máscara')[0], productDetails('Alcool get', 'Máscara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const firstProduct = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const lengthFirstProduct = productDetails('Alcool get', 'Máscara')[0].details.productId.length;
    let numbers = '';
    for (let index = lengthFirstProduct - 3; index < lengthFirstProduct; index += 1) {
      numbers += firstProduct[index];
    }
    assert.strictEqual(numbers, '123');
    const secondProduct = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    const lengthSecondProduct = productDetails('Alcool get', 'Máscara')[1].details.productId.length;
    numbers = '';
    for (let index = lengthSecondProduct - 3; index < lengthSecondProduct; index += 1) {
      numbers += secondProduct[index];
    }
    assert.strictEqual(numbers, '123');
  });
});
